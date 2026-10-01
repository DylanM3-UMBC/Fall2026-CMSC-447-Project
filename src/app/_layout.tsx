import { Stack } from "expo-router";

export default function RootLayout() {
  // const router = useRouter()

  // let isAuth = false;
  // useEffect(() => {
  //   if(!isAuth){
  //     router.replace("/(auth)/login");
  //   }
  // })

  return (
    <Stack screenOptions ={{  headerShown: false  }}>
      <Stack.Screen name="(tabs)" options={{orientation: 'landscape' }} />
      <Stack.Screen name="(auth)" options={{orientation: 'landscape' }} />
    </Stack>
  );
}
