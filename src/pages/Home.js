import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import "../styles/home.css";

function Home() {
    return (
        <Container id="container">
            <Row id="main">
                <Col xs={{ span: 8, offset: 2 }} >
                    <Card id="todo">
                        <Card.Body>
                            <Card.Title className="text-center">Todo List</Card.Title>
                            <Form>
                                <Form.Row>
                                    <Form.Control placeholder="Enter the task" id="inputbox"></Form.Control>
                                    <span id="submit"><span>+</span></span>
                                </Form.Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default Home;