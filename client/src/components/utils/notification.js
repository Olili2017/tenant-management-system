import React from 'react'
import './css/notification.css'

function Notification (){
    return(
        <div className="noti-container"  >
            <div className="noti-top" ></div>
            <div className="noti-body">
                <p>Alex made a payment</p>
            </div>
            <div className="noti-foot text-right">
                <p>moments ago</p>
            </div>
        </div>
    )
}

export default Notification