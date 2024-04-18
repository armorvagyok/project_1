import { Inter } from 'next/font/google'
import PostCard from '@/components/PostCard'
import Menu from '@/components/Menu'
import { Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { use } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

async function get() {
    return await axios.get("localhost/project_1/server/public/api/posts")
}

export default function Home() {
    const posts = use(get()).data;
    return(
        <div className="background">
            <title>NOTEHOUSE - Posts</title>
            <Container>
                <Menu/>
                <Col>
                    <div className="cardouter">
                        {posts && posts.map(post => (
                            <PostCard post={post}/>
                        ))}
                    </div>
                </Col>
            </Container>
        </div>
    )
}