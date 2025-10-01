import { colors, spacing, typography } from '@/theme';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type BackButtonProps = {
  onPress?: () => void;
};

export function BackButton({ onPress }: BackButtonProps) {
  const router = useRouter();

  return (
    <Pressable style={styles.button} onPress={onPress ?? (() => router.back())}>
      <Entypo name="chevron-left" size={16} color={colors.pink} />
    </Pressable>
  );
}

export function BackButtonText({ onPress }: BackButtonProps) {
  const router = useRouter();

  return (
    <Pressable style={styles.button} onPress={onPress ?? (() => router.back())}>
      <Entypo name="chevron-left" size={16} color={colors.pink} />
      <Text style={styles.text}>Back</Text>
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
    ...typography.button,
    color: colors.pink,
  },
});
