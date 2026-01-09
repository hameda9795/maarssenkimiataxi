export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAeM1t33OUbG76pt5cNWukWTZap3zt69T0",
    authDomain: "kimiataxi-628ab.firebaseapp.com",
    projectId: "kimiataxi-628ab",
    storageBucket: "kimiataxi-628ab.firebasestorage.app",
    messagingSenderId: "289375401756",
    appId: "1:289375401756:web:c9a435b8694af217d66cd9",
    vapidKey: "BE1QsVACHlQjSITHAFPwfS5Cb65NW8wt5YSjYBIo4bDFthkNzjnRAFBKC4w7ygcdVaMzVGo9tXxdmJbkfjmLmoo"
  },
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://192.168.178.204:8080/api'
};
