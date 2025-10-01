import { spacing } from '@/theme';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function Screen({ children, style }: ScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: 12,
    overflow: 'visible',
    backgroundColor: 'transparent',
  },
});
