import { colors, spacing, typography } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  header: {
    alignSelf: 'flex-start',
    paddingLeft: spacing.lg,
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: spacing.xl,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '90%',
    gap: spacing.lg,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typography.h1,
    color: colors.pink,
    alignSelf: 'center',
    marginBottom: spacing.lg,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    width: '100%',
  },
});

export default styles;
