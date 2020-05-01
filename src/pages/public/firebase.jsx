import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD0oJh-A0LHEAB21AUFe46OtpYMFkrLgKw',
  authDomain: 'newagent-57a26.firebaseapp.com',
  databaseURL: 'https://newagent-57a26.firebaseio.com',
  projectId: 'newagent-57a26',
  storageBucket: 'newagent-57a26.appspot.com',
  messagingSenderId: '915567008938',
  appId: '1:915567008938:web:d7f2d052f3fc4338ee84d3',
};

firebase.initializeApp(config);

export default firebase;
