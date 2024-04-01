import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from '@/components/Menu'
import { Container, Col, Row, Form, Card } from 'react-bootstrap'
import post from '@/data/posts.json'
import { Post } from '@/interfaces/post'
import HomePostCard from '@/components/HomePostCard'
import user from "@/data/users.json"
import { User } from "@/interfaces/user"
import HomeFriends from "@/components/HomeFriends"
import notification from "@/data/notification.json"
import { Notification } from "@/interfaces/notification"

import Notifications from "@/components/Notifications"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
    <div className="Hbody">
      <Container>
        <Menu/>
        <Row>
        <Col lg={6}>
        <div className="cardouter">
        {post && post.map((post: Post) => (
          <HomePostCard post={post}/>
        ))}
        </div>
        </Col>
        <Col lg={6}>
          
            {user && user.map((user: User) => (
              <HomeFriends user={user}/>

            ))}

      <Form className='Noti'>
      <Form className="notimargo"  >
       
        <h5 className='NotTitle'>Notifications</h5>
        <br></br>
        
      {notification && notification.map((notification: Notification) => (
              <Notifications notification={notification}/>

            ))}
      </Form>
      </Form>
      </Col>
      </Row>
      </Container>
    </div>
  )
}