import axios from "axios"
import { useRouter } from "next/router"
import { Button, Form, Nav } from "react-bootstrap";

export default function Menu() {
    const router = useRouter();

    return(
        <>
            <br/>
            <h1 className="pagetitle titlewrapper"><b>NOTEHOUSE</b></h1>
            <div className="navbuttons">
                
                <Nav className="navBar">
                    
                    <Nav.Item className="button">
                        <Button type="submit" href={"/search"}><b>Search</b></Button>
                    </Nav.Item>
                    <Nav.Item className="button">
                        <Button href={`/`}><b>Posts</b></Button>
                    </Nav.Item>
                    <Nav.Item className="button">
                        <Button color="#FFFFFF" href={`/profile`}><b>Profile</b></Button>
                    </Nav.Item>
                    <Button color="#FFFFFF" className="button" onClick={(event) => {
                        axios.post("http://localhost/project_1/server/public/api/logout").then((res) => {
                            router.push("/login")
                        }).catch((error) => {
                            alert(error.message)
                        })
                    }}><b>Logout</b></Button>
                </Nav>
            </div>
            <br/>
        </>
    )
}