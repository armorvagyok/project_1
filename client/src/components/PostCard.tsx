import { Card, Container, Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'

export default function PostCard({
    title,
    text,
    url,
    username
} : {
    title: string,
    text: string,
    url: string,
    username: string
}) {
    return(
        <Container>
            <Card className="card mb-3">
                <Card.Body>
                    <Card.Text><a className="username" href={`/profile/${username}`}>@{username}</a></Card.Text>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <div className="url">
                        {URLRender()}
                    </div>
                </Card.Body>
                <Card.Footer className="foot">
                    <Card.Text>
                    </Card.Text>
                    {ShareRender()}
                </Card.Footer>
            </Card>
        </Container>
    )

    function URLRender() {
        if (url.includes("soundcloud.com/")) {
            return <ReactPlayer url={url} width={900} height={150}/>
        } else if (url === null || url === "") {
            return null
        } else return <ReactPlayer url={url} width={900} />
    }
    
    function ShareRender() {
        if (url === "" || url === null) {
            return <></>
        } else return <a href={url} className="openlink" color="rgb(0, 184, 107)" target="_blank"><Button>Open Link</Button></a>
    }
}