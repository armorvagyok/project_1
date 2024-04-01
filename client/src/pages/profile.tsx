import { Container, Image, Col, Row } from "react-bootstrap";
import Menu from "@/components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Profile() {
    return(
        <div className="background">
            <Container className="Profile">
                <Menu/>
                <Row>
                    <Col lg={3}>
                        <Image src="https://djmag.com/sites/default/files/top100/djs/image/70.%20Mike%20Williams.jpeg" className="pfp"/>
                    </Col>
                    <Col>
                        <div className="alaptext">
                            <h2><b>@mikewilliams</b></h2>
                            <h5>Top 100 DJ 2021-2024 (DJ Mag), performed at Tomorrowland, ADE, DLDK, Parookaville</h5>
                            <h6><b>EDM, Future House, Future Bounce, Bass House</b></h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}