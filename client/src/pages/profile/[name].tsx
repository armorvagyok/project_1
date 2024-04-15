import ProfilePage from "@/components/ProfilePage"
import axios from "axios"
import { Row, Col } from "react-bootstrap"
import { use } from "react"

async function getUser() {
    return await axios.get(`http://localhost/project_1/server/public/api/user`)
}

export default function Update({ params } : {
    params: {
        user: string
    }
}) {
    const user = use(getUser()).data
    return(
        <Row>
            <Col>
                <ProfilePage 
                    user={params.user}
                    name={user.name}
                    email={user.email}
                    description={user.description}
                />
            </Col>
        </Row>
    )
}