import { colors, radius, spacing, typography } from '@/theme';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type InputProps = {
  value: string;
  label?: string;
  onChangeText: (text: string) => void;
};

export function Input({ value, onChangeText, label }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} value={value} onChangeText={onChangeText} />
    </View>
  );
}

export function InputEmail({ value, onChangeText }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} inputMode="email" value={value} onChangeText={onChangeText} />
    </View>
  );
}

export function InputPassword({ value, onChangeText }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        inputMode="text"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {
    ...typography.button,
    color: colors.pink,
    paddingLeft: spacing.lg,
    paddingBottom: spacing.sm,
  },
  input: {
    height: 48,
    backgroundColor: colors.white,
    borderRadius: radius.button,
    paddingHorizontal: spacing.lg,
  },
});
