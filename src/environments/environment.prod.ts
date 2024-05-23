const NG_APP_FIREBASE_CONFIG = import.meta.env.NG_APP_FIREBASE_CONFIG;
const NG_APP_GA_ID = import.meta.env.NG_APP_GA_ID;

export const environment = {
    production: true,
    GA_ID: NG_APP_GA_ID,
    FIREBASE_CONFIG: JSON.parse(NG_APP_FIREBASE_CONFIG)
};
