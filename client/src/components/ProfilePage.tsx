import { Container, Image, Col, Row, Form } from "react-bootstrap";
import Menu from "@/components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"

export default function ProfilePage({
    user,
    name,
    email,
    description
}: {
    user: string,
    name: string,
    email: string,
    description: string
}) {
    return(
        <div className="background">
            <Container className="Profile">
                <Menu/>
                <Row>
                   <Col lg={3}>
                        <Image src="https://djmag.com/sites/default/files/top100/djs/image/70.%20Mike%20Williams.jpeg" className="pfp"/>
                    </Col>
                    <Col>
                        <Form onSubmit={(event) => {
                            event.preventDefault();

                            const form = event.target;

                            axios.put(`http://localhost/project_1/server/public/api/users/update/${user}`, {
                                name: form.name.value,
                                email: form.email.value,
                                description: form.description.value
                            }).then((res) => {
                                alert("Sikeres mentés")
                            })
                        }}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="number" name="username" defaultValue={name}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>E-mail Address</Form.Label>
                                <Form.Control type="number" name="email" defaultValue={email}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="number" name="desc" defaultValue={description} height={150}>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}