import '../global.css';
import { useFonts } from 'expo-font';
import { Text,View } from 'react-native';

import { Stack } from 'expo-router';

export default function Layout() {

  const [fontsLoaded] = useFonts({
    CascadiaMono: require('../assets/fonts/CascadiaMono-VariableFont_wght.ttf'),
    Inter: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),

  });

  if (!fontsLoaded) {
    return (
      <View>

      <Text>Yükleniyor...</Text>
      </View>
    )
  }
  return (
    <Stack >
        <Stack.Screen name="index" options={{

          headerShown: false
        }
        } />
    </Stack >
  )
}
