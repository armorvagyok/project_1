import axios from "axios"
import { useRouter } from "next/router"
import { Form } from "react-bootstrap";

export default function Menu() {
    const router = useRouter();

    return(
        <>
        <br/>
        <div className="navBar">
            <h1 className="pagetitle titlewrapper"><b>NOTEHOUSE</b></h1>
            <a className="searchbt buttonwrapper" href={`/search`} color="#00B86B"><b>Search</b></a>
            <a className="postbt buttonwrapper" href={`/`} color="#00B86B"><b>Posts</b></a>
            <a className="profilebt buttonwrapper" href={`/profile`}><b>Profile</b></a>
            <Form>
                <a className="logoutbt buttonwrapper" onSubmit={(event) => {
                    event.preventDefault();
                    axios.post("http://localhost/project_1/server/public/api/logout").then((res) => {
                        router.push("/login")
                    }).catch((error) => {
                        alert(error.message)
                    })
                }}><b>Logout</b></a>
            </Form>
        </div>
        <br/>
        </>
    )
}