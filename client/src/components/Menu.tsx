export default function Menu() {
    return(
        <>
            <br/>
            <h1 className="pagetitle titlewrapper"><b>NOTE HOUSE</b></h1>
            <a className="homebt buttonwrapper" href={`/`}><b>Home</b></a>
            <a className="postbt buttonwrapper" href={`/posts`} color="#00B86B"><b>Posts</b></a>
            <a className="profilebt buttonwrapper" href={`/profile`}><b>Profile</b></a>
            <br/>
        </>
    )
}