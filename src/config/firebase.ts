import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getMessaging, Messaging, isSupported } from 'firebase/messaging';
import { environment } from './environment';

let app: FirebaseApp | undefined;
let messaging: Messaging | undefined;

export const initializeFirebase = () => {
  if (typeof window === 'undefined') {
    return; // Skip on server-side
  }

  if (!getApps().length) {
    app = initializeApp(environment.firebase);
  } else {
    app = getApps()[0];
  }

  return app;
};

export const getFirebaseMessaging = async (): Promise<Messaging | undefined> => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const supported = await isSupported();
  if (!supported) {
    console.warn('Firebase messaging is not supported in this browser');
    return undefined;
  }

  if (!app) {
    initializeFirebase();
  }

  if (!messaging && app) {
    messaging = getMessaging(app);
  }

  return messaging;
};
