// components/Screen.tsx
import React from "react";
import { ImageBackground, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function Screen({ children, style }: ScreenProps) {
  return (
    <ImageBackground source={require("@/assets/images/Background-white.png")} style={{ flex: 1 }} resizeMode="cover">
      <SafeAreaView style={[styles.container, style]} edges={["top", "bottom"]}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "transparent",
  },
});
