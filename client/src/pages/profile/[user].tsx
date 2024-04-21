"use client";

import ProfilePage from "@/components/ProfilePage"
import axios from "axios"
import { Row, Col, Container } from "react-bootstrap"
import { use, useEffect, useState } from "react"
import Menu from "@/components/Menu"

export default function Profile() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://localhost/project_1/server/public/api/user");
            setData(result.data);
        };
        fetchData();
    }, []);

    return(
        <Container>
            <Menu/>
            <ProfilePage
                username={data.name}
                email={data.email}
                description={data.description}
            />
        </Container>
    )
}