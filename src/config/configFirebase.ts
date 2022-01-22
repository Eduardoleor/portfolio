import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyADmMer0LXFcNk4DTb3gai5zWsE_P1-5FE',
    authDomain: 'eduardoleal-dev.firebaseapp.com',
    projectId: 'eduardoleal-dev',
    storageBucket: 'eduardoleal-dev.appspot.com',
    messagingSenderId: '396895704068',
    appId: '1:396895704068:web:eeda994bddc9d25d395151',
    measurementId: 'G-ZVHMM0444G',
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export {
    firebaseApp,
    database,
    analytics,
};
