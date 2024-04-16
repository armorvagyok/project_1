import { Inter } from 'next/font/google'
import PostCard from '@/components/PostCard'
import post from '@/data/posts.json'
import { Post } from '@/interfaces/post'
import Menu from '@/components/Menu'
import { Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return(
        <div className="background">
            <title>NOTEHOUSE - Posts</title>
            <Container>
                <Menu/>
                <Col>
                    <div className="cardouter">
                        {post && post.map((post: Post) => (
                            <PostCard post={post}/>
                        ))}
                    </div>
                </Col>
            </Container>
        </div>
    )
}