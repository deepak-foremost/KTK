import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

import SplashScreen from './src/screens/Splash';
import InformationScreen from './src/screens/Information';
import LogInScreen from './src/screens/LogIn';
import SignUpScreen from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import BreakingNewsScreen from './src/screens/BreakingNews';
import BreakingDetailScreen from './src/screens/BreakingDetail';
import CalendarScreen from './src/screens/Calenendar';
import DirectoryScreen from './src/screens/Directory';
import ContactUsScreen from './src/screens/ContactUs';
import FaqsScreen from './src/screens/Faqs';
import NotificationScreen from './src/screens/Notification';
import ProfileScreen from './src/screens/Profile';
import ClimateChangeScreen from './src/screens/ClimateChange';

const Stack = createNativeStackNavigator();

// function Root(){
//   return (
//     <Drawer.Navigator>
//        <Drawer.Screen name="Information" component={InformationScreen} />
//        <Drawer.Screen name="LogIn" component={LogInScreen} options={{headerShown : false}}/>
//         <Drawer.Screen name="SignUp" component={SignUpScreen}  options={{headerShown : false}}/>
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="BreakingNews" component={BreakingNewsScreen} options={{headerShown : false}}/>
//         <Drawer.Screen name="BreakingDetail" component={BreakingDetailScreen} />
//         <Drawer.Screen name="Calendar" component={CalendarScreen} />
//     </Drawer.Navigator>
//   );
// }

function App() {
  return (
    <View style={{ flex: 1 }}>
      <View ref={"otherView1"} />
      <View ref={"otherView2"} />
      <View ref={"otherView3"} />
      {/* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */}
      <FlashMessage position="top" /> {/* <--- here as the last component */}
    </View>
  );
}
const MyStack = () => {
  return ( 
    
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Information" component={InformationScreen} options={{headerShown:false}} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen
          name="BreakingNews"
          component={BreakingNewsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BreakingDetail"
          component={BreakingDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Directory"
          component={DirectoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Faqs"
          component={FaqsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ClimateChange"
          component={ClimateChangeScreen}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
