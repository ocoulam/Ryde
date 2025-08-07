import { Stack } from 'expo-router';

// "Require" means it must load before the app starts (async)
const Layout = () => {
  return (
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack> 
  );
}

export default Layout;
