export default function Menu() {
    return(
        <>
        <br/>
        <h1 className="pagetitle"><b>musical society</b></h1>
        <a className="homebt" href={`/`}><b>Home</b></a>
        <a className="postbt" href={`/posts`} color="#00B86B"><b>Posts</b></a>
        <a className="profilebt" href={`/profile`}><b>Profile</b></a>
        <a className="loginbt" href={`/login`}><b>Login</b></a>
        <a className="friendsbt" href={`/Friends`}><b>Friends</b></a>

        <br/>
        </>
    )
}