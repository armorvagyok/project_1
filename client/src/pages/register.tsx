import { Col, Container, Form, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Register() {
    return(
        
        <Form className="loginBody">
            <Form className="wrapper"  >
   
            <h1 className="h1">Register</h1>


    <Form.Group className="input-box" as={Row}  >
        <Col>
        <input type="text" placeholder="Username" required/>
          <i className='bx bxs-user'></i>
        </Col>
    </Form.Group>

    <Form.Group className="input-box" as={Row}  >
        <Col>
        <input type="text" placeholder="E-mail" required/>
          <i className='bx bxs-user'></i>
        </Col>
    </Form.Group>

    <Form.Group className="input-box" as={Row}  >
        <Col >
          <input type="password" placeholder="Password" required/>
          <i className='bx bxs-locsk-alt'></i>
        </Col>
    </Form.Group>

    <Form.Group className="input-box" as={Row}  >
        <Col >
          <input type="password" placeholder="Password" required/>
          <i className='bx bxs-locsk-alt'></i>
        </Col>
    </Form.Group>

    

    <button type="submit" className="btn">Register</button>
           
           
      </Form>
        </Form>

    )
}