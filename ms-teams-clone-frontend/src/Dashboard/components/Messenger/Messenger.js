import React, { useState, useEffect } from 'react';
import { sendMessageUsingDataChannel } from '../../../utils/webRTC/webRTCHandler';
import MessageDisplayer from './MessageDisplayer';
import "firebase/auth";
import "firebase/firestore";
import firebase from 'firebase';
import './Messenger.css';

//firebase config
var firebaseConfig = {

  apiKey: "AIzaSyAYdLO-v4Ty3aWmnqe7iXmzrCYgr7a1iWk",
  authDomain: "videochat-472a2.firebaseapp.com",
  projectId: "videochat-472a2",
  databaseURL: "https://videochat-472a2-default-rtdb.firebaseio.com",
  storageBucket: "videochat-472a2.appspot.com",
  messagingSenderId: "383505580197",
  appId: "1:383505580197:web:a26012cacf007a6e614d4c",
  measurementId: "G-ZM3GKPPZD5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

const Messenger = ({ message, setDirectCallMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnKeyDownEvent = (e) => {
    if (e.keyCode === 13) {
      sendMessageUsingDataChannel(inputValue);
      setInputValue('');
      db.collection("chat").add({
        name: "Rahul",
        message: inputValue,
        id: 1,
        time: firebase.firestore.Timestamp.now()
      })
    }
  };

  useEffect(() => {
    if (message.received) {
      ;
    }
  }, [message.received]);

  return (
    <>
      <input
        className='messages_input'
        type='text'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleOnKeyDownEvent}
        placeholder='Type your message'
      />
      {message.received && <MessageDisplayer message={message.content} />}
    </>
  );
};

export default Messenger;
