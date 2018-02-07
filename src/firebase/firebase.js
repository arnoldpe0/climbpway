import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyAsmd8nY5roq-v9kOJPW08nNX9ZEF6CypA",
  authDomain: "climbpway.firebaseapp.com",
  databaseURL: "https://climbpway.firebaseio.com",
  projectId: "climbpway",
  storageBucket: "climbpway.appspot.com",
  messagingSenderId: "42761890094"
};

const devConfig = {
  apiKey: "AIzaSyAsmd8nY5roq-v9kOJPW08nNX9ZEF6CypA",
  authDomain: "climbpway.firebaseapp.com",
  databaseURL: "https://climbpway.firebaseio.com",
  projectId: "climbpway",
  storageBucket: "climbpway.appspot.com",
  messagingSenderId: "42761890094"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
