import { useCreateAccount } from '@/auth/useCreateAccount';
import { BackButtonText } from '@/components/buttons/BackButton';
import Button from '@/components/buttons/Button';
import { Input, InputEmail, InputPassword } from '@/components/fields/Input';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './signup.styles';

export default function Index() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    handleCreateAccount,
    loading,
  } = useCreateAccount();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButtonText />
      </View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top - 20 : 0}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Create Account</Text>
              <Input value={username} onChangeText={setUsername} label="Username" />
              <InputEmail value={email} onChangeText={setEmail} />
              <InputPassword value={password} onChangeText={setPassword} />
              <View style={styles.buttonContainer}>
                <Button
                  title="Create account"
                  onPress={handleCreateAccount}
                  size="default"
                  variant="secondary"
                  isLoading={loading}
                />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
