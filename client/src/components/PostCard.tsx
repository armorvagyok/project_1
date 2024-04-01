import { Post } from '@/interfaces/post'
import { Card, Container, Button, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player'

export default function PostCard({ post } : {post : Post}) {
    return(
        <Container>
            <Card className="card mb-3">
                <Card.Body>
                    <Card.Text><a className="username" href={`/profile/${post.user}`}>@{post.user}</a></Card.Text>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.text}</Card.Text>
                    <div className="url">
                        {URLRender()}
                    </div>
                </Card.Body>
                <Card.Footer className="foot">
                    <Card.Text>
                    {post.tags && post.tags.map((post: string) => (
                        Tag(post)
                    ))}
                    </Card.Text>
                    {ShareRender()}
                </Card.Footer>
            </Card>
        </Container>
    )
    function URLRender() {
        if (post.url.includes("https://soundcloud.com/")) {
            return <ReactPlayer url={post.url} width={900} height={150}/>
        } else if (post.url === null || post.url === "") {
            return null
        } else return <ReactPlayer url={post.url} width={900} />
    }
    function Tag(tag: string) {
        return(
            <a className="tag" href={`/hashtag/${tag}`}>#{tag} </a>
        )
    }
    function ShareRender() {
        if (post.url === "" || post.url === null) {
            return <></>
        } else return <a href={post.url} className="openlink" color="rgb(0, 184, 107)" target="_blank"><Image width={25} height={25} src="https://media.discordapp.net/attachments/761616483922608158/1178625230927822899/share.png?ex=6576d348&is=65645e48&hm=79c937be92d13a91569826903f6e87f6dd1ce78424531dc3c80595c6c1f6480d&=&format=webp"></Image></a>
    }
}