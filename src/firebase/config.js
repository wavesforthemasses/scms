import 'dotenv/config';

export default {
  apiKey: process.env.FirebaseApiKey,
  authDomain: process.env.FirebaseAuthDomain,
  databaseURL: process.env.FirebaseDatabaseURL,
  projectId: process.env.FirebaseProjectId,
  storageBucket: process.env.FirebaseStorageBucket,
  messagingSenderId: process.env.FirebaseMessagingSenderId,
  appId: process.env.FirebaseAppId
};
