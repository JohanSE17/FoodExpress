import crashlytics from '@react-native-firebase/crashlytics';

export const logCrash = (error: any, context: string) => {
  crashlytics().log(`💳 Payment Error - ${context}`);
    crashlytics().recordError(new Error(JSON.stringify(error)));
      console.error(`🚨 CRASH DETECTADO en ${context}:`, error);
      };