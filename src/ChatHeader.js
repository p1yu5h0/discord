import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdEditLocation, MdOutlinePeopleAlt } from 'react-icons/md'
import { BiSend, BiHelpCircle} from 'react-icons/bi'

function ChatHeader() {
    return (
        <div className="chatHeader">
            <h3>I am the Header.</h3>
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    Test Channel Name
                </h3>
            </div>

            <div className="chatHeader__right">
                <IoMdNotificationsOutline/>
                <MdEditLocation/>
                <MdOutlinePeopleAlt/>

                <div className="chatHeader__search">
                    <input placeholderSearch="Search" />
                    <AiOutlineSearch />
                </div>

                <BiSend/>
                <BiHelpCircle/>
            </div>
        </div>
    )
}

export default ChatHeader
