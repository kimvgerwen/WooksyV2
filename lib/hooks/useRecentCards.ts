import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

type Card = {
  id: string;
  signedUrl: string;
};

export function useRecentCards(limit = 5) {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentCards = async () => {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('cards')
        .select('id, image_path, created_at')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (fetchError) {
        console.error('Error fetching cards:', fetchError);
        setError(fetchError.message);
        setLoading(false);
        return;
      }

      if (!data) {
        setCards([]);
        setLoading(false);
        return;
      }

      const signedUrls = await Promise.all(
        data.map(async (card) => {
          const { data: signed, error: urlError } = await supabase.storage
            .from('photocards')
            .createSignedUrl(card.image_path, 60 * 60); // 1h

          if (urlError) {
            console.error('Error creating signed URL:', urlError);
            return { id: card.id, signedUrl: '' };
          }

          return { id: card.id, signedUrl: signed.signedUrl };
        }),
      );

      setCards(signedUrls.filter((c) => c.signedUrl));
      setLoading(false);
    };

    fetchRecentCards();
  }, [limit]);

  return { cards, loading, error };
}
