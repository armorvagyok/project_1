import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PostCard from "./PostCard";

export default function SearchPage() {
    const [data, setData] = useState('');

    function Data(adat: string) {
        useEffect(() => {
            const fetchData = async () => {
                const result = await axios.get(`http://localhost/project_1/server/public/api/posts/search`, {
                    title: adat
                });
                setData(result.data);
            };
            fetchData();
        }, []);
    }

    return(
        <Form className="searchform" onSubmit={(event) => {
            const form = event.target;

            Data(form.searchbar.value);
        }}>
            <Row>
                <Col className="col-3"/>
                <Col className="col-5">
                    <Form.Group>
                        <Form.Control type="text" name="searchbar"></Form.Control>
                    </Form.Group>
                </Col>
                <Col className="col-1">
                    <Button type="submit">Search</Button>
                </Col>
                <Col className="col-3"/>
            </Row>
        </Form>
    )
}