import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from "@/components/Menu";

export default function Hashtag() {
    return(
        <body>
            <title>NOTEHOUSE - Hashtag</title>
            <div className="background bgh">
                <Container>
                    <Menu/>
                </Container>
            </div>
        </body>
    )
}