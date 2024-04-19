"use client";

import PostCard from '@/components/PostCard'
import Menu from '@/components/Menu'
import { Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { use, useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost/project_1/server/public/api/posts");
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
                    <div className="cardouter">
                        {data.map(post => (
                            <PostCard key={post.id} post={post}/>
                        ))}
                    </div>
                </Col>
            </Container>
        </div>
    )
}