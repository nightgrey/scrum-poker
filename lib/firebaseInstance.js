import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


// The reason why we do this is because next.js may execute this function twice,
// resulting in an error.
// https://github.com/zeit/next.js/issues/1999
export default !firebase.apps.length
  ? firebase.initializeApp(process.env.firebaseConfig)
  : firebase.app();
