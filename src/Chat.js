import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import "./Chat.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdCardGiftcard } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { AiOutlineGif } from "react-icons/ai";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  

  useEffect(() => {
      if(channelId){
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
            setMessages(snapshot.docs.map((doc) => doc.data()))
        );
      }
  }, [channelId]);

  const sendMessage = (e) => {
      e.preventDefault();

      db.collection("channels").docs(channelId).collection("messages").add({
          timestamp: firebase.firestore.fieldValue.serverTimestamp(),
          message: input,
          user: user,
      });

      setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat__messages">
        {messages.map((message) => (
            <Message 
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
            />
        ))}
      </div>

      <div className="chat__input">
        <AiFillPlusCircle fontSize="x-large" />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
            />
          <button 
            disabled={!channelId}
            className="chat__inputButton" 
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <MdCardGiftcard fontSize="x-large" className="Icons" />
          <AiOutlineGif fontSize="x-large" className="Icons" />
          <MdOutlineEmojiEmotions fontSize="x-large" className="Icons" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
