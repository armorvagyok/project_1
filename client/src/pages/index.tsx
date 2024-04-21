"use client";

import PostCard from '@/components/PostCard'
import Menu from '@/components/Menu'
import { Container, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://localhost/project_1/server/public/api/posts");
            setData(result.data);
        };
        fetchData();
    }, []);

    return(
        <div className="background">
            <title>NOTEHOUSE - Posts</title>
            <Container>
                <Menu/>
                <Col>
                    <Button href='/posts/create'>Create Post</Button>
                    <div className="cardouter">
                        {data.map(post => (
                            <PostCard key={post.id}
                                title={post.title}
                                text={post.text}
                                url={post.url}
                                username={post.user.name}
                            />
                        ))}
                    </div>
                </Col>
            </Container>
        </div>
    )
}