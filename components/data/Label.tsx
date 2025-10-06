import { colors, radius, spacing, typography } from '@/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type LabelType = 'Album' | 'POB' | 'Lucky Draw' | 'MD' | 'SSG' | 'Other';

type LabelProps = {
  type: LabelType;
};

const variants = {
  Album: { backgroundColor: colors.orange, textColor: colors.white },
  POB: { backgroundColor: colors.pink, textColor: colors.white },
  'Lucky Draw': { backgroundColor: colors.purple, textColor: colors.black },
  MD: { backgroundColor: colors.coral, textColor: colors.pink },
  SSG: { backgroundColor: colors.darkPurple, textColor: colors.white },
  Other: { backgroundColor: colors.blue, textColor: colors.white },
};

export default function Label({ type }: LabelProps) {
  const { backgroundColor, textColor } = variants[type];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.button,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  text: {
    ...typography.button,
  },
});
