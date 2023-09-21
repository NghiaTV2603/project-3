const firebase = require('firebase');

const firebaseConfig = {
  apiKey: 'AIzaSyBc7YZjQ9Kxu2VcTPgtvT00HgyERrKba8o',
  authDomain: 'project3-ecf47.firebaseapp.com',
  projectId: 'project3-ecf47',
  storageBucket: 'project3-ecf47.appspot.com',
  messagingSenderId: '743070558671',
  appId: '1:743070558671:web:c0fc0aba9d5d00b9e20aba',
  measurementId: 'G-W41SF25Z99'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

module.exports = db;
