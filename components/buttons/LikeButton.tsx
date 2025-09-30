import { colors, effects, radius } from '@/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';

type LikeButtonProps = {
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
};

export default function LikeButton({ onPress }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handlePress = () => {
    setIsLiked(!isLiked);
    onPress?.();
  };

  return (
    <Pressable onPress={handlePress} style={style.button}>
      <FontAwesome name={isLiked ? 'heart' : 'heart-o'} size={32} color={colors.pink} />
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
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});
