import { Col, Row, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import Router from "next/router";

export default function RegisterPage() {
    return(
        <Form className="wrapper" onSubmit={(event) => {
            event.preventDefault();
            const form = event.target;

            if(form.password1.value === form.password2.value) {
                axios.post(`http://localhost/project_1/server/public/api/users/create`, {
                    name: form.username.value,
                    email: form.email.value,
                    password: form.password1.value
                }).then((res) => {
                    alert("Sikeres regisztráció")
                    Router.push("/login")
                })
            } else alert("A két jelszó nem egyezik meg")
        }}>
            <h1 className="h1">Register</h1>
            <Form.Group className="input-box" as={Row}  >
                <Col>
                    <input type="text" placeholder="Username" name="username" required/>
                    <i className='bx bxs-user'></i>
                </Col>
            </Form.Group>

            <Form.Group className="input-box" as={Row}  >
                <Col>
                    <input type="text" placeholder="E-mail" name="email" required/>
                    <i className='bx bxs-user'></i>
                </Col>
            </Form.Group>

            <Form.Group className="input-box" as={Row}  >
                <Col>
                    <input type="password" placeholder="Password" name="password1" required/>
                    <i className='bx bxs-locsk-alt'></i>
                </Col>
            </Form.Group>

            <Form.Group className="input-box" as={Row}  >
                <Col>
                    <input type="password" placeholder="Password again" name="password2" required/>
                    <i className='bx bxs-locsk-alt'></i>
                </Col>
            </Form.Group>
                
            <button type="submit" className="btn">Register</button>
        </Form>
    )
}