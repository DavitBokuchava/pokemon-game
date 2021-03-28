import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDQfvgWXrgSAbnkOPvytMMpn-hDitlYPdk",
    authDomain: "pokemon-game-efc40.firebaseapp.com",
    databaseURL: "https://pokemon-game-efc40-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-efc40",
    storageBucket: "pokemon-game-efc40.appspot.com",
    messagingSenderId: "1018276870963",
    appId: "1:1018276870963:web:2adc295e108cd893ad1c46"
};
   firebase.initializeApp(firebaseConfig);
export const fire = firebase;
   const  database = fire.database();

export default database;
