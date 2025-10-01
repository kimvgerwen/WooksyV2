import { lightTheme } from '@/theme';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { ImageBackground } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const [loaded] = useFonts({
    Quicksand: require('../assets/fonts/Quicksand-VariableFont_wght.ttf'),
  });
  if (!loaded) return null;

  return (
    <ImageBackground
      source={require('@/assets/images/Background-white.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView edges={['top']} />
      <PaperProvider theme={lightTheme}>
        <Stack
          screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent' } }}
        />
      </PaperProvider>
    </ImageBackground>
  );
}
