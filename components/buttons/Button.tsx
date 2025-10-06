import { colors, radius, spacing, typography } from '@/theme';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  size?: 'fullWidth' | 'default';
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
};

export default function Button({
  title,
  onPress,
  size = 'default',
  variant = 'primary',
  isLoading = false,
}: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const buttonStyle = [style.button, size === 'fullWidth' && style.fullWidth];
  const textStyle = [style.buttonText, variant === 'secondary' && style.secondaryText];
  const spinnerColor = variant === 'secondary' ? colors.white : colors.pink;

  if (variant === 'secondary') {
    return (
      <LinearGradient
        colors={colors.gradient}
        style={[buttonStyle, isPressed && !isLoading && style.pressed]}
      >
        <Pressable
          disabled={isLoading}
          onPress={onPress}
          onPressIn={() => !isLoading && setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          style={style.pressable}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color={spinnerColor} />
          ) : (
            <Text style={textStyle}>{title}</Text>
          )}
        </Pressable>
      </LinearGradient>
    );
  }

  return (
    <Pressable
      disabled={isLoading}
      onPress={onPress}
      style={({ pressed }) => [buttonStyle, pressed && !isLoading && style.pressed]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={spinnerColor} />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </Pressable>
  );
}

const style = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: radius.button,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    backgroundColor: colors.white,
    minWidth: 120,
  },
  fullWidth: {
    width: '100%',
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: colors.pink,
    ...typography.button,
  },
  secondaryText: {
    color: colors.white,
  },
  pressable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
