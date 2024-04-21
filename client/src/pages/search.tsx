import Menu from "@/components/Menu";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchPage from "@/components/SearchPage";

export default function Search() {
    return(
        <div className="background">
            <Container>
                <Menu/>
                <SearchPage/>
            </Container>
        </div>
    )
}