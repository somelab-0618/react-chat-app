import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCJPWi1mgMcErHaLya12DVMn7mY2bEjyyc',
  authDomain: 'react-chat-app-d75b4.firebaseapp.com',
  databaseURL: 'https://react-chat-app-d75b4-default-rtdb.firebaseio.com',
  projectId: 'react-chat-app-d75b4',
  storageBucket: 'react-chat-app-d75b4.appspot.com',
  messagingSenderId: '484640258238',
  appId: '1:484640258238:web:32d675a8655614f41106ef',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
