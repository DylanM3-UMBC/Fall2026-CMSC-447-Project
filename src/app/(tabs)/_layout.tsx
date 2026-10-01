import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarPosition: 'left',
        tabBarActiveTintColor: '#25009d', // active icon/label color
        tabBarInactiveTintColor: '#888', // inactive icon/label color
        tabBarActiveBackgroundColor: 'transparent',
        tabBarInactiveBackgroundColor: 'transparent', // inactive tab background
        tabBarStyle: {
          backgroundColor: '#d8dbdf', // overall tab bar background
        },
      }}>
    
      <Tabs.Screen 
        name="index" 
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons 
              name="home-outline"
              color={color} 
              size={24} 
            />
          )
        }} 
      />

      <Tabs.Screen 
        name="comments" 
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons 
              name="chatbubble-outline"
              color={color} 
              size={24} 
            />
          )
        }} 
      />

      <Tabs.Screen 
        name="profile" 
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons 
              name="person-outline"
              color={color} 
              size={24} 
            />
          )
        }} 
      />

    </Tabs>
    
  );
}
