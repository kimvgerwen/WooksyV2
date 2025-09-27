import Screen from "@/components/Screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    Quicksand: require("../assets/fonts/Quicksand-VariableFont_wght.ttf"),
  });
  if (!loaded) return null;


  return <Screen><Stack screenOptions={{ headerShown: false, contentStyle: {backgroundColor: "transparent"} }} /></Screen>;
}
