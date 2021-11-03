import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdEditLocation, MdOutlinePeopleAlt } from 'react-icons/md'
import { BiSend, BiHelpCircle} from 'react-icons/bi'
import "./ChatHeader.css"


function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    Test Channel Name
                </h3>
            </div>

            <div className="chatHeader__right">
                <IoMdNotificationsOutline className="Icons"/>
                <MdEditLocation className="Icons"/>
                <MdOutlinePeopleAlt className="Icons"/>

                <div className="chatHeader__search">
                    <input placeholder="Search" />
                    <AiOutlineSearch className="Icons"/>
                </div>

                <BiSend className="Icons"/>
                <BiHelpCircle className="Icons"/>
            </div>
        </div>
    )
}

export default ChatHeader
