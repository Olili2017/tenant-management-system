import React from 'react'
import Notification from './notification'
import './css/noti-panel.css'

function NotificationPanel (){
    return (
        <div className="noti-panel" >
            <div className="noti-panel-header-container" >
                <header>Notifications</header>
            </div>
            <div className="notifications-container" >
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </div>
        </div>
    )
}

export default NotificationPanel