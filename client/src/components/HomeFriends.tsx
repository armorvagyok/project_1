import { User } from "@/interfaces/user"
import user from "@/data/users.json"
import { Card, Image, Col, Row } from "react-bootstrap"
import post from "@/data/users.json"

export default function HomeFriends({ user } : {user : User}) {
    return(
        <div className="card2">
        <Card>
            <Card.Body>
                <Row>
                <Col lg={3}>
                    <Image src={user.avatar} className="pfp2"/>
                </Col>
                <Col>
                    <Card.Text><b>@{user.user}</b><br/>Online</Card.Text>
                </Col>
                
                </Row>
            </Card.Body>

        </Card>
        </div>
    )
}