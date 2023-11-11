import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';

import SplashScreen from '../screens/Splash';
import InformationScreen from '../screens/Information';
import LogInScreen from '../screens/LogIn';
import SignUpScreen from '../screens/SignUp';
import HomeScreen from '../screens/Home';
import BreakingNewsScreen from '../screens/BreakingNews';
import BreakingDetailScreen from '../screens/BreakingDetail';
import CalendarScreen from '../screens/Calenendar';
import DirectoryScreen from '../screens/Directory';
import ContactUsScreen from '../screens/ContactUs';
import FaqsScreen from '../screens/Faqs';
import NotificationScreen from '../screens/Notification';
import ProfileScreen from '../screens/Profile';
import ClimateChangeScreen from '../screens/ClimateChange';
import MackenzieValley from '../screens/MackenzieValley';
import GreatBear from '../screens/GreatBear';
import Remidation from '../screens/Remediation';
import ForgetScreen from '../screens/ForgetScreen';
import ForgetOtp from '../screens/ForgetOtp';
import NewPassword from '../screens/NewPassword';
import Constants from './Constants';
import Scholarships from '../screens/Scholarships';
import SahtuHeritage from '../screens/SahtuHeritage';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name={Constants.SPLASH_SCREEN}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.INFORMATION_SCREEN}
          component={InformationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.LOGIN_SCREEN}
          component={LogInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.SIGNUP_SCREEN}
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.HOME_SCREEN}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.NEWS_SCREEN}
          component={BreakingNewsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.NEWS_DETAIL_SCREEN}
          component={BreakingDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.CALENDAR_SCREEN}
          component={CalendarScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.DIRECTORY_SCREEN}
          component={DirectoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.CONTACT_US_SCREEN}
          component={ContactUsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.FAQS_SCREEN}
          component={FaqsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.NOTIFICATION_SCREEN}
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.PROFILE_SCREEN}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.CLIMATE_CHANGE_SCREEN}
          component={ClimateChangeScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.MACKENZIE_VELLY_SCREEN}
          component={MackenzieValley}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.GREAT_BEAR_SCREEN}
          component={GreatBear}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.REMEIDATION_SCREEN}
          component={Remidation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.FORGET_SCREEN}
          component={ForgetScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.FORGET_OTP_SCREEN}
          component={ForgetOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.NEW_PASSWORD_SCREEN}
          component={NewPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.SCHOLARSHIPS_SCREEN}
          component={Scholarships}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name={Constants.SAHTU_HERITAGE}
          component={SahtuHeritage}
          options={{headerShown: false}}
        />


       
      </Stack.Navigator>
    </NavigationContainer>

    
  );
};

export default RootNavigation;

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const push = (navigation, name, params) => {
  navigation.push(name, params);
};

export const goBack = () => {
  navigationRef.current.goBack();
};
export const goToRoot = () => {
  navigationRef.current.navigate(AppScreens.SplashScreen);
};

export const forcePush = (props, screenName, data) => {
  props?.navigation?.reset({
    index: 0,
    routes: [{name: screenName, params: data}],
  });
};
