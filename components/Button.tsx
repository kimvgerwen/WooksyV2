import { colors, radius, spacing, typography } from "@/theme";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
    size?: "fullWidth"| "default";
    variant?: "primary" | "secondary";
};

export default function Button({ title, onPress, size = "default", variant = "primary" }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const buttonStyle = [style.button, size === "fullWidth" && style.fullWidth];
  const textStyle = [style.buttonText, variant === "secondary" && style.secondaryText];

  if (variant === "secondary") {
    return (
      <LinearGradient colors={colors.gradient} style={[buttonStyle, isPressed && style.pressed]}>
        <Pressable
          onPress={onPress}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          style={style.pressable}
        >
          <Text style={textStyle}>{title}</Text>
        </Pressable>
      </LinearGradient>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [buttonStyle, pressed && style.pressed]}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.button,
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    width: 120,
    backgroundColor: colors.white,
  },
  fullWidth: {
    width: "100%",
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
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
});