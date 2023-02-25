import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './pageNotFound.scss'

const pageNotFound = () => {
    return (
        <div className="pageNotFound">
            <Container>
                <Row>
                    <Col sm="12">
                        <h1>404</h1>
                        <h2>Страница не найдена</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default pageNotFound;