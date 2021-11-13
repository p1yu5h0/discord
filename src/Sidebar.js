import React, {useEffect, useState} from 'react'
import "./sidebar.css";
import SidebarChannel from './SidebarChannel';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdExpandMore } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import { IoMdHeadset } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import Avatar from 'react-avatar';
import { useSelector } from "react-redux";
import {selectUser} from "./features/userSlice"
import db, { auth } from "./firebase";

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))
        });
    }, [])


    const handleAddChannel = () => {
        const channelName = prompt("Enter a new Channel Name");

        if(channelName){
            db.collection('channels').add({
                channelName: channelName,

            })
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h2>Piyush Agrawal</h2>
                <MdExpandMore />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <MdExpandMore />
                        <h4>Text Channels</h4>
                    </div>

                    <AiOutlinePlusCircle className="sidebar__addChannel" onClick={handleAddChannel}/>
                </div>
                <div className="sidebar__channelsList">
                    {channels.map(({ id, channel }) => (
                        <SidebarChannel key={id} 
                        id={id} 
                        channelName={channel.channelName}/>
                    ))}   
                </div>    
            </div>
            <div className="sidebar__voice">
                <MdOutlineSignalCellularAlt className="sidebar__voiceIcon" fontSize="large"/>
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <AiOutlineInfoCircle className="profile_icons_other"/>
                    <IoMdCall className="profile_icons_other"/>
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar size="30px" round="20px" onClick={() => auth.signOut()} src={user.photo} className="avatar_pic"/>
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>

                <div className="sidebar__profileIcons">
                    <BsMicFill className="profile_icons"/>
                    <IoMdHeadset className="profile_icons"/>
                    <IoMdSettings className="profile_icons"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

