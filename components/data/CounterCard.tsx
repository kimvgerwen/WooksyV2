import { colors, radius, spacing, typography } from '@/theme';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type CounterCardProps = {
  variant: 'wishlist' | 'inventory';
  counter: number;
  onPress?: () => void;
};

export default function CounterCard({ variant, counter, onPress }: CounterCardProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.text}>
        <Text style={{ ...typography.h3 }}>
          {variant === 'wishlist' ? 'My Wishlist' : 'My Inventory'}
        </Text>
        <Entypo name="chevron-right" size={20} color={colors.black} />
      </View>
      <View style={styles.icon}>
        <LinearGradient
          colors={colors.gradient}
          style={{
            padding: 4,
            borderRadius: 50,
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {variant === 'wishlist' ? (
            <Entypo name="heart-outlined" size={20} color={colors.white} />
          ) : (
            <Feather name="archive" size={20} color={colors.white} />
          )}
        </LinearGradient>
        <Text style={{ ...typography.bodyS }}>{`${counter} cards`}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.md,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
});
