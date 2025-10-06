import { colors, spacing, typography } from '@/theme';
import { StyleSheet, Text, View } from 'react-native';

export default function Inventory() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      <Text style={styles.subtitle}>All the cards you currently own.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.md,
  },
  title: {
    ...typography.h1,
    color: colors.pink,
  },
  subtitle: {
    ...typography.bodyL,
    color: colors.black,
    marginTop: spacing.sm,
  },
});
