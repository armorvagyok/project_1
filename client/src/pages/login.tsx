import { Col, Container, Form, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Login() {
    return(
        
        <Form className="loginBody">
            <Form className="wrapper"  >
            <h1 className="h1">Login</h1>


    <Form.Group className="input-box" as={Row}  >
        <Col>
        <input type="text" placeholder="Username" required/>
        </Col>
    </Form.Group>

    <Form.Group className="input-box" as={Row}  >
        <Col >
          <input type="password" placeholder="Password" required/>
          <i className='bx bxs-lock-alt'></i>
        </Col>
    </Form.Group>

    <Form.Group className="remember-forgot" as={Row} >
        <Col>
        <label><input type="checkbox"/>Remember me</label>
                <a href="#" className="Fpw" >Forgot password?</a>  
        </Col>
</Form.Group>   

    <button type="submit" className="btn">Login</button>
            <div className="register-link">
                <p>Don't have an account? <a href={`/register`}>Register</a></p>
            </div>
           
      </Form>
        </Form>

/*
<div class="wrapper" >
        <form action="">
            <h1>Login</h1>
            <div class="input-box">
                    <input type="text" placeholder="Username" required>
                    <i class='bx bxs-user'></i>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" required>
                <i class='bx bxs-lock-alt'>
                </i>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox">Remember me</label>
                <a href="#">Forgot password?</a>  
            </div>

            <button type="submit" class="btn">Login</button>
            <div class="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>

        </form>


   </div>
*/

    )
}