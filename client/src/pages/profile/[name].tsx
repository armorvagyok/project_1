import Menu from '@/components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Image } from 'react-bootstrap'
import { User } from "@/interfaces/user"
import post from '@/data/posts.json'

export default function Profile({ user } : {user : User}) {
    return(
        <div className="background bgh">
            <Container>
                <Menu/>
            </Container>
        </div>
    )
}