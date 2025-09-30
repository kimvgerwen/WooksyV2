import { useLogin } from '@/auth/useLogin';
import { BackButtonText } from '@/components/buttons/BackButton';
import Button from '@/components/buttons/Button';
import { InputEmail, InputPassword } from '@/components/fields/Input';
import React from 'react';
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
  const { email, setEmail, password, setPassword, handleLogin, loading } = useLogin();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButtonText />
      </View>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top - 20 : 0}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.innerContainer}>
                <Text style={styles.title}>Login</Text>
                <InputEmail value={email} onChangeText={setEmail} />
                <InputPassword value={password} onChangeText={setPassword} />
                <View style={styles.buttonContainer}>
                  <Button
                    title="Login"
                    onPress={handleLogin}
                    size="default"
                    variant="secondary"
                    isLoading={loading}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
