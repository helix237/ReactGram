import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCdcKqpM3IkZxyNUvq7Ugdh09hePY4zt80",
  authDomain: "react-photos-4e6ec.firebaseapp.com",
  databaseURL: "https://react-photos-4e6ec.firebaseio.com",
  projectId: "react-photos-4e6ec",
  storageBucket: "react-photos-4e6ec.appspot.com",
  messagingSenderId: "1009822442317",
  appId: "1:1009822442317:web:203b803cd4717251c0cd04"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, auth, timestamp };

