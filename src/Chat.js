import React from 'react'
import ChatHeader from './ChatHeader'
import "./Chat.css"
import { AiFillPlusCircle } from 'react-icons/ai'
import { MdCardGiftcard } from 'react-icons/md'
import { MdOutlineEmojiEmotions } from 'react-icons/md'
import { AiOutlineGif } from 'react-icons/ai'
import Message from './Message'

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>

            <div className="chat__input">
                <AiFillPlusCircle fontSize="x-large"/>
                <form >
                    <input placeholder={`Message #TESTCHANNEL`} />
                    <button className="chat__inputButton" type='submit'>
                        Send Message
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <MdCardGiftcard fontSize="x-large" className="Icons"/>
                    <AiOutlineGif fontSize="x-large" className="Icons"/>
                    <MdOutlineEmojiEmotions fontSize="x-large" className="Icons"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
