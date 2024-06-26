import { Container, Image, Col, Row, Form } from "react-bootstrap";
import Menu from "@/components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"

export default function ProfilePage({
    username,
    email,
    description
}: {
    username: string,
    email: string,
    description: string
}) {
    return(
        <div className="background">
            <Container className="Profile">
                <Menu/>
                <Row>
                    <Col>
                        <Form onSubmit={(event) => {
                            event.preventDefault();
                            const form = event.target;

                            axios.put(`http://localhost/project_1/server/public/api/users/update/${username}`, {
                                username: form.username.value,
                                email: form.email.value,
                                description: form.description.value
                            }).then((res) => {
                                alert("User details updated")
                            })
                        }}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="number" name="username" defaultValue={name}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>E-mail Address</Form.Label>
                                <Form.Control type="number" name="email" defaultValue={email}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="number" name="desc" defaultValue={description} height={150}/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}