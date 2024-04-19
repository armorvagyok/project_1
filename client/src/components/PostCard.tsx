import { Card, Container, Button, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player'

export default function PostCard({ 
    title,
    text,
    url,
    user_id
 } : {
    title: string,
    text: Text,
    url: string,
    user_id: number
 }) {
    return(
        <Container>
            <Card className="card mb-3">
                <Card.Body>
                    <Card.Text><a className="username" href={`/profile/${user_id}`}>@{user_id}</a></Card.Text>
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
        if (url.includes("https://soundcloud.com/")) {
            return <ReactPlayer url={url} width={900} height={150}/>
        } else if (url === null || url === "") {
            return null
        } else return <ReactPlayer url={url} width={900} />
    }
    
    function ShareRender() {
        if (url === "" || url === null) {
            return <></>
        } else return <a href={url} className="openlink" color="rgb(0, 184, 107)" target="_blank"><Image width={25} height={25} src="https://media.discordapp.net/attachments/761616483922608158/1178625230927822899/share.png?ex=6576d348&is=65645e48&hm=79c937be92d13a91569826903f6e87f6dd1ce78424531dc3c80595c6c1f6480d&=&format=webp"></Image></a>
    }
}