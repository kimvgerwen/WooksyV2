import Button from '@/components/buttons/Button';
import { colors, spacing, typography } from '@/theme';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Wooksy</Text>
        <Text style={styles.subtitle}>The Zerobaseone photocard collection app</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => router.navigate('/login')} size="fullWidth" />
        <Button
          title="Create Account"
          onPress={() => router.navigate('/register')}
          size="fullWidth"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    marginTop: 400,
  },
  titleContainer: {
    gap: spacing.sm,
  },
  title: {
    ...typography.splash,
    color: colors.white,
  },
  subtitle: {
    ...typography.bodyFat,
    color: colors.white,
  },
  buttonContainer: {
    width: '90%',
    gap: spacing.lg,
    marginTop: spacing.xxl,
  },
});
