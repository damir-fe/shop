import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductSidebar from "../../ProductSidebar/ProductSidebar";
import ProductItemSlider from "../../UI/Slider/ProductItemSlider";
import ProductInfo from "../../ProductInfo/ProductInfo";
import useFetch from "../../../hooks/useFetching";
import {useParams} from "react-router-dom";

import "./ProductItemPage.scss"

const ProductItemPage = () => {
    const params = useParams();
    const { products, error, isLoading } = useFetch('https://damir-fe.github.io/shop/products/' + params.id);

    if (isLoading) {
        return <div style={{textAlign: "center"}}>Загрузка..</div>
    }
    if (error) {
        return <div><h1 style={{justifyContent: "center"}}>{error}</h1></div>
    }
    
    return (
        <div className="product-item">
            <Container>
                <Row>
                    <Col lg="3">
                        <ProductSidebar/>
                    </Col>
                    <Col lg={{span: 5}}>
                        <ProductItemSlider 
                            classname="product-item__slider" 
                            url={products.url} 
                            name={products.name} 
                        />
                    </Col>
                    <Col lg="4">
                        <ProductInfo
                            products={products}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductItemPage;