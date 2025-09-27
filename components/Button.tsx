import { colors, radius, spacing, typography } from "@/theme";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
    size?: "fullWidth"| "default";
};

export default function Button({ title, onPress, size = "default" }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        style.button,
        size === "fullWidth" && style.fullWidth,
        pressed && style.pressed,
      ]}
    >
      <Text style={style.buttonText}>{title}</Text>
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
    flexDirection: "row",
    gap: spacing.xs,
    backgroundColor: colors.white,
  },
  fullWidth: {
    alignSelf: "stretch",
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: colors.pink,
    ...typography.button,
  },
});