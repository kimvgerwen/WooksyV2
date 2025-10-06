export function unslugify(str: string): string {
  return str
    .split(/[-_ ]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

export function buildDescription(
  era: string,
  source: string,
  type: string,
  version: string,
): string {
  const eraName = unslugify(era);
  const sourceName = unslugify(source);
  const typeLower = type.toLowerCase();

  if (version.toLowerCase() === 'album') {
    return `${eraName} ${sourceName} ver.`;
  }

  switch (typeLower) {
    case 'pob':
    case 'ssg':
    case 'md':
      return `${eraName} ${sourceName} ${type.toUpperCase()}`;
    case 'lucky-draw':
      return `${eraName} ${sourceName} Lucky Draw`;
    default:
      return `${eraName} ${sourceName} ${unslugify(type)}`;
  }
}
