import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Reviews = () => {
    return (
        <Container>
            <Row>
                <Col sm="12">
                    <h1>Отзывы</h1>
                </Col>
                <Col lg="6">
                    Отзыв
                </Col>
                <Col lg="6">
                    Отзыв
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;