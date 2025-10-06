import { LabelType } from '@/components/data/Label';
import { supabase } from '@/lib/supabase';
import { buildDescription, unslugify } from '@/lib/utils/formatCard';

type CardRow = {
  id: string;
  member: string;
  era: string;
  type: string;
  image_path: string;
  source: string;
  version: string;
};

export type CardWithUrl = CardRow & {
  signed_url: string | null;
  normalized_type: LabelType;
  displayDescription: string;
};

const typeMap: Record<string, LabelType> = {
  album: 'Album',
  pob: 'POB',
  'lucky-draw': 'Lucky Draw',
  md: 'MD',
  ssg: 'SSG',
  other: 'Other',
};

export async function mapCard(card: CardRow): Promise<CardWithUrl> {
  const { data: signed } = await supabase.storage
    .from('photocards')
    .createSignedUrl(card.image_path, 60 * 60);

  return {
    ...card,
    member: unslugify(card.member),
    signed_url: signed?.signedUrl ?? null,
    normalized_type: typeMap[card.type.toLowerCase()] ?? 'Other',
    displayDescription: buildDescription(card.era, card.source, card.type, card.version),
  };
}
