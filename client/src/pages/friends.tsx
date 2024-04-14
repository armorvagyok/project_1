import HomeFriends from "@/components/HomeFriends";
import Menu from "@/components/Menu";
import user from "@/data/users.json"
import { User } from "@/interfaces/user";
import { Col, Container, Row } from "react-bootstrap";


export default function Friends() {
    return(

        <div className="friends">
            <Container className = 'Friends'>
               <Menu/> 
                   <Row>
                        <Col lg={6}>
                        
                        {user && user.map((user: User) => (
                        <HomeFriends user={user}/>
                         ))}
                       
                        </Col>
                   </Row> 
            </Container>
        </div>

    )
}