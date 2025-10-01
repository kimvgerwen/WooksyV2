import { colors, spacing, typography } from '@/theme';
import Entypo from '@expo/vector-icons/Entypo';
import { Pressable, StyleSheet, Text } from 'react-native';

type SeeAllButtonProps = {
  onPress?: () => void;
};

export function SeeAllButton({ onPress }: SeeAllButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>See All</Text>
      <Entypo name="chevron-right" size={20} color={colors.black} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    gap: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...typography.h3,
    color: colors.black,
  },
});
