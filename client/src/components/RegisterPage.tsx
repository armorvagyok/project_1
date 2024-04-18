import { Col, Row, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useRouter } from "next/router";

export default function RegisterPage() {
    const router = useRouter();

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
                    router.push("/login")
                })
            } else alert("A két jelszó nem egyezik meg")
        }}>
            <h1 className="h1">Register</h1>
            <Form.Group className="input-box" as={Row}  >
                <Col>
                    <Form.Control type="text" placeholder="Username" name="username" required/>
                    <i className='bx bxs-user'></i>
                </Col>
            </Form.Group>

            <Form.Group className="input-box" as={Row}  >
                <Col>
                    <Form.Control type="text" placeholder="E-mail" name="email" required/>
                    <i className='bx bxs-user'></i>
                </Col>
            </Form.Group>

            <Form.Group className="input-box" as={Row}  >
                <Col>
                    <Form.Control type="password" placeholder="Password" name="password1" required/>
                    <i className='bx bxs-locsk-alt'></i>
                </Col>
            </Form.Group>

            <Form.Group className="input-box" as={Row}  >
                <Col>
                    <Form.Control type="password" placeholder="Password again" name="password2" required/>
                    <i className='bx bxs-locsk-alt'></i>
                </Col>
            </Form.Group>
                
            <Button type="submit" className="btn">Register</Button>

            <div className="register-link">
                <p>Have an account? <a href={`/login`}>Log in</a></p>
            </div>
        </Form>
    )
}