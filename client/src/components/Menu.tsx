import axios from "axios"
import Router from "next/router"

export default function Menu() {
    return(
        <>
            <br/>
            <h1 className="pagetitle titlewrapper"><b>NOTEHOUSE</b></h1>
            <a className="homebt buttonwrapper" href={`/`}><b>Home</b></a>
            <a className="postbt buttonwrapper" href={`/posts`} color="#00B86B"><b>Posts</b></a>
            <a className="profilebt buttonwrapper" href={`/profile`}><b>Profile</b></a>
            <a className="logoutbt buttonwrapper" onClick={() => {
                axios.post("http://localhost/project_1/server/public/api/logout").then((res) => {
                    Router.push("/login")
                })
            }} href="#"><b>Logout</b></a>
            <br/>
        </>
    )
}