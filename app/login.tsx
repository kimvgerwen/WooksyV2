import Button from "@/components/Button";
import { InputEmail, InputPassword } from "@/components/Input";
import { useLogin } from "@/hooks/useLogin";
import { colors, spacing, typography } from "@/theme";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Index() {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={styles.innerContainer}
        >
          <Text
            style={styles.title}
          >
            Login
          </Text>
          <InputEmail value={email} onChangeText={setEmail} />
          <InputPassword value={password} onChangeText={setPassword} />
          <View style={styles.buttonContainer}>
            <Button
              title="Login"
              onPress={handleLogin}
              size="default"
              variant="secondary"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "transparent",
    width: "90%",
    gap: spacing.lg,
    alignSelf: "center",
    justifyContent: "center",
  },
  title: {
    ...typography.h1,
    color: colors.pink,
    alignSelf: "flex-start",
    paddingLeft: spacing.md,
    marginBottom: 32,
  },
  buttonContainer: {
    alignSelf: "flex-end",
  },
});
