import { Col, Container, Form, Row, Button } from "react-bootstrap"
import axios, { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function LoginPage() {
    const router = useRouter();

    return(
        <Form className="wrapper" onSubmit={(event) => {
            event.preventDefault();
            const form = event.target;

            axios.post(`http://localhost/project_1/server/public/api/login`, {
                email: form.email.value,
                password: form.password.value
            }).then((res) => {
                router.push("/profile")
            }).catch(function (AxiosError) {
                alert(AxiosError + "\nInvalid credentials")
            }).catch(function (error) {
                alert(error.message)
            });

            console.log(localStorage.getItem('jwt'));
            alert("asd")
        }}>

        <h1 className="h1">Login</h1>

        <Form.Group className="input-box" as={Row}>
            <Col>
                <Form.Control type="text" placeholder="E-mail" name="email" required/>
            </Col>
        </Form.Group>

        <Form.Group className="input-box" as={Row}>
            <Col >
                <Form.Control type="password" placeholder="Password" name="password" required/>
                <i className='bx bxs-lock-alt'></i>
            </Col>
        </Form.Group>

        <Button type="submit" className="btn">Login</Button>
            <div className="register-link">
                <p>Don't have an account? <a href={`/register`}>Register</a></p>
            </div>
        </Form>
    )
}