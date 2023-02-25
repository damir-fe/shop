import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm="4">
                        <div className="header__logo logo"><Link to="/">iPurchase</Link></div>
                    </Col>
                    <Col sm="8">
                        <div>© {new Date().getFullYear()} Все права защищены</div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;