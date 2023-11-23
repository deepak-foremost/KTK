import { Platform, PermissionsAndroid } from "react-native"
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sendFirebaseToken } from "../networking/CallApi";

export const log = (message) => {
    if (__DEV__) {
        console.log(`FIREBASE : `, `${Platform.OS} >>> ${message}`)
    }
}

const requestNotificationPermission = async () => {
    if (Platform.OS == 'android') {
        try {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
            )
        } catch (err) {
            if (__DEV__) console.warn('requestNotificationPermission error: ', err)
        }
    }
}

export const requestUserPermission = async () => {
    requestNotificationPermission();
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        log(`Authorization status: ${authStatus}`);
        getFcmToken();
    } else {
        getFcmToken();
    }
}

const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcm_token');
    log(`FCM Token : OLD ${fcmToken}`);
    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();
            await AsyncStorage.setItem('fcm_token', fcmToken);
            log(`FCM Token : NEW  ${fcmToken}`);
        } catch (error) {
            log(`FCM Token : Error  ${error?.message}`);
        }
    }
    sendFirebaseToken()
};

export const notificationListener = async () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        log(
            Platform.OS + ' Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });

    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            //Call When app is closed and click on notification
            if (remoteMessage) {
                log(
                    Platform.OS + ' Notification caused app to open from quit state:',
                    JSON.stringify(remoteMessage),
                );
                //props.navigation.reset({ routes: [{ name: AppConstants.welcom_screen, params: { message_id: 1, receiver: 0 } }] });
                //RootNavigation.navigate(AppConstants.chat_screen, { message_id: 1, receiver: 0 })
            }
        });


    messaging().onMessage(async remoteMessage => {
        log(
            Platform.OS + ' Notification caused app forgraund state:',
            remoteMessage,
        );
    })
}