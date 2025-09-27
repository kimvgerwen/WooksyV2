import Button from "@/components/Button";
import { colors, spacing, typography } from "@/theme";
import { Text, View } from "react-native";

export default function Index() {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          width: "100%",
          marginTop: 400,
        }}
      >
        <View style={{ gap: spacing.sm}}>
          <Text style={{ ...typography.splash, color: colors.white }}>Wooksy</Text>
          <Text style={{ ...typography.bodyFat, color: colors.white }}>The Zerobaseone photocard collection app</Text>
        </View>
        <View style={{ width: "90%", gap: spacing.lg, marginTop: spacing.xxl}}>
          <Button title="Login" onPress={() => {}}  size="fullWidth" />
          <Button title="Create Account" onPress={() => {}} size="fullWidth" />
        </View>
      </View>
)};


