import { colors, effects, radius } from '@/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';

type LikeButtonProps = {
  onToggle: () => void;
  isLiked: boolean;
  isLoading?: boolean;
};

export default function LikeButton({ onToggle, isLiked, isLoading = false }: LikeButtonProps) {
  return (
    <Pressable onPress={onToggle} disabled={isLoading}>
      <View style={style.button}>
        {isLoading ? (
          <ActivityIndicator size="small" color={colors.pink} />
        ) : (
          <FontAwesome name={isLiked ? 'heart' : 'heart-o'} size={24} color={colors.pink} />
        )}
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  button: {
    borderRadius: radius.button,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 44,
    backgroundColor: colors.white,
    ...effects.shadow,
  },
});
