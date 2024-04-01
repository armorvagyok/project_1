import {Notification } from "@/interfaces/notification"
import { Card, Col, Row } from "react-bootstrap"



export default function Notifications({ notification } : {notification : Notification}) {
    return(
        <div>
            
            

        <Card className="NotiCard">
                <Col>
                <span className="border-bottom border-primary"> @{notification.user} </span><i>(Online)</i>
                </Col>
                <Col>
                <b>{notification.title}:</b> {notification.text}
                </Col>
                </Card>
          
        </div>
    )
}