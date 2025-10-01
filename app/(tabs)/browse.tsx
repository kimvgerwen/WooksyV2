import { colors, spacing, typography } from '@/theme';
import { StyleSheet, Text, View } from 'react-native';

export default function Browse() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse</Text>
      <Text style={styles.subtitle}>Explore all available photocards.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: spacing.md },
  title: { ...typography.h1, color: colors.pink },
  subtitle: { ...typography.bodyL, color: colors.black, marginTop: spacing.sm },
});
