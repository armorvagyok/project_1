"use client";

import axios from "axios"
import { Form, Button, Container, Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from "@/components/Menu";

export default function CreateForm() {
    return (
        <div className="background">
            <Container>
            <Menu/>
                <Form onSubmit={(event) => {
                    event.preventDefault();

                    const form = event.target;
                    
                    axios.post("http://localhost/project_1/server/public/api/posts/create", {
                        title: form.title.value,
                        text: form.text.value,
                        url: form.url.value
                    }).then((res) => {
                        alert("Posted successfully!");
                    }).catch((error) => {
                        alert("Error");
                    })
                }}>
                    <Card>
                        <Container className="createcard">
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Text</Form.Label>
                                <Form.Control className="textinput" as="textarea" name="text"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>URL</Form.Label>
                                <Form.Control type="text" name="url"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Button className="createbutton buttonwrapper" type="submit">Mentés</Button>
                            </Form.Group>
                        </Container>
                    </Card>
                </Form>
            </Container>
        </div>
    )
}