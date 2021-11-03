import React from 'react'
import Avatar from 'react-avatar'
import "./Message.css"

function Message() {
    return (
        <div className="message">
            <Avatar size="40px" round="20px" src="https://avatars.githubusercontent.com/u/74711555?v=4"/>
            <div className="message__info">
                <h4>
                    Piyush
                    <span className="message__timestamp">this is a timestamp
                    </span>
                </h4>

                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Message
