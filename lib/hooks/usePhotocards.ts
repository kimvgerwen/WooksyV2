import { supabase } from '@/lib/supabase';
import { CardWithUrl, mapCard } from '@/lib/utils/mapCard';
import { useCallback, useEffect, useState } from 'react';

export function usePhotocards(pageSize = 20) {
  const [cards, setCards] = useState<CardWithUrl[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchCards = useCallback(
    async (pageIndex: number) => {
      const from = pageIndex * pageSize;
      const to = from + pageSize - 1;
      const { data, error } = await supabase.from('cards').select('*').range(from, to);
      if (error || !data) return [];
      return Promise.all(data.map(mapCard));
    },
    [pageSize],
  );

  const loadInitial = useCallback(async () => {
    setLoading(true);
    const newCards = await fetchCards(0);
    setCards(newCards);
    setPage(1);
    setHasMore(newCards.length === pageSize);
    setLoading(false);
  }, [fetchCards, pageSize]);

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    const newCards = await fetchCards(page);
    setCards((prev) => [...prev, ...newCards]);
    setPage((prev) => prev + 1);
    setHasMore(newCards.length === pageSize);
    setLoadingMore(false);
  }, [fetchCards, hasMore, loadingMore, page, pageSize]);

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  return { cards, loading, loadMore, loadingMore, hasMore };
}
