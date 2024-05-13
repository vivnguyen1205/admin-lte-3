import {FirebaseOptions, initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {environment} from 'environments/environment';

if (!environment.FIREBASE_CONFIG) {
    throw new Error('Firebase config is missing!');
}

const firebaseConfig: FirebaseOptions = JSON.parse(environment.FIREBASE_CONFIG);

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
