import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player'

export default function PostCard({
    title,
    text,
    url,
    user_id
} : {
    title: string,
    text: string,
    url: string,
    user_id: number
}) {
    return(
        <Container>
            <Card className="card mb-3">
                <Card.Body>
                    {User().map(user => {
                        if(user.id === user_id) {
                            return <Card.Text><a className="username" href={`/profile/${user.name}`}>@{user.name}</a></Card.Text>
                        } else return <Card.Text>unknown_user</Card.Text>
                    })}
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
        } else return <a href={url} className="openlink" color="rgb(0, 184, 107)" target="_blank"><Image width={25} height={25} src="C:\laragon\www\project_1\client\public\images\open.png"></Image></a>
    }

    function User() {
        const [data, setData] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                const result = await axios("http://localhost/project_1/server/public/api/users");
                setData(result.data);
            };
            fetchData();
        }, []);

        return data;
    }
}