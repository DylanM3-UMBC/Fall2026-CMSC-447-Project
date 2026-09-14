import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  return (
    <NativeTabs indicatorColor= "#e4dafb" tintColor="#4c00ff">
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={require('../../assets/images/googlehomeicon.png')} />
        
      </NativeTabs.Trigger>
      
      <NativeTabs.Trigger name="comments">
        <NativeTabs.Trigger.Label>Comments</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={require('../../assets/images/googlecommenticon.png')}/>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={require('../../assets/images/googleaccounticon.png')}/>
      </NativeTabs.Trigger>

      

      
      
    </NativeTabs>
  );
}
