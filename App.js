import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import RootNavigation from './src/utils/RootNavigation';

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
import MackenzieValley from './src/screens/MackenzieValley';
import GreatBear from './src/screens/GreatBear';
import Remidation from './src/screens/Remediation';
import ForgetScreen from './src/screens/ForgetScreen';
import ForgetOtp from './src/screens/ForgetOtp';
import NewPassword from './src/screens/NewPassword';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();

const MyStack = () => {
  return (
    <>
      <RootNavigation />
      <FlashMessage />
    </>
  );
};

export default MyStack;

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
