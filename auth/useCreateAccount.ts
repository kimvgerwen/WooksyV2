import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';

export function useCreateAccount() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Refs for latest values in functions
  const usernameRef = useRef(username);
  const emailRef = useRef(email);
  const passwordRef = useRef(password);
  useEffect(() => {
    usernameRef.current = username;
  }, [username]);
  useEffect(() => {
    emailRef.current = email;
  }, [email]);
  useEffect(() => {
    passwordRef.current = password;
  }, [password]);

  async function handleCreateAccount() {
    const username = usernameRef.current.trim();
    const mail = emailRef.current.trim();
    const password = passwordRef.current;

    if (!mail || !password || !username) {
      Alert.alert('Please fill in all fields!');
      return;
    }

    setLoading(true);
    try {
      const { data: taken, error: checkErr } = await supabase
        .from('profiles')
        .select('id')
        .ilike('username', username)
        .maybeSingle();

      if (checkErr) throw checkErr;
      if (taken) {
        Alert.alert('Username taken', 'Please choose a different username.');
        return;
      }

      const { data, error: signUpError } = await supabase.auth.signUp({
        email: mail,
        password: password,
        options: {
          data: { username: username },
        },
      });
      if (signUpError) throw signUpError;

      Alert.alert(
        'Success',
        'Account created successfully! Please check your email to verify your account.',
      );
      router.push('/home');
    } catch (err: any) {
      const msg = String(err?.message ?? '');
      if (msg.includes('23505') || /username.*unique/i.test(msg)) {
        Alert.alert('Username taken', 'Please choose a different username.');
      } else {
        Alert.alert('Account creation failed', msg || 'Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleCreateAccount,
  };
}
