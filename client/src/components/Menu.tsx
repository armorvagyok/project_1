import axios from "axios"
import Router from "next/router"

export default function Menu() {
    return(
        <>
            <br/>
            <h1 className="pagetitle titlewrapper"><b>NOTEHOUSE</b></h1>
            <a className="searchbt buttonwrapper" href={`/search`} color="#00B86B"><b>Search</b></a>
            <a className="postbt buttonwrapper" href={`/`} color="#00B86B"><b>Posts</b></a>
            <a className="profilebt buttonwrapper" href={`/profile`}><b>Profile</b></a>
            <a href="#" className="logoutbt buttonwrapper" onClick={() => {
                axios.post("http://localhost/project_1/server/public/api/logout").then((res) => {
                    Router.push("/login")
                })
            }}><b>Logout</b></a>
            <br/>
        </>
    )
}