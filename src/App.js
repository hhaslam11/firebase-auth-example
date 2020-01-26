import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

function App() {

  //firebase
  console.log(firebaseConfig);

  //init app
  firebase.initializeApp(firebaseConfig);

  //init auth connection
  const auth = firebase.auth();

  //create new users with email and password
  auth.createUserWithEmailAndPassword('testuser1@hotmail.com', 'password123');
  auth.createUserWithEmailAndPassword('testuser2@gmail.com', 'hunter2');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
