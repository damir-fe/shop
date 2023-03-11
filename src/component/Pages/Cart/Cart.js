import React, {useEffect, useMemo, useState} from 'react';
import useFetch from "../../../hooks/useFetching";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../../productCard/ProductCard";
import Pagination from "../../Pagination/Pagination";

import "./Cart.scss"
import axios from "axios";

let PageSize = 8;

const Cart = () => {
    const { products, error, isLoading } = useFetch('http://localhost:3001/cart/');

    const [currentPage, setCurrentPage] = useState(1);
    
    const countTotal = useMemo(() => {
        return products.reduce((acc, n) => acc + n.price, 0);
    }, [products]);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, products]);

    // const deleteData = () => {
        // const productsId = products.map(item =>
        //     axios.delete(`http://localhost:3001/cart/${item.id}`).then(response => {
        //         console.log('worked')
        //     })
        // );
    // }
    
    const orderStart = () => {
        alert('Оплата сюда: 88005553535')
    }
    
    if (isLoading) {
        return <div style={{textAlign: "center"}}>Загрузка..</div>
    }
    if (error) {
        return <div><h1 style={{justifyContent: "center"}}>{error}</h1></div>
    }
    
    return (
        <div className="cart">
            {products.length <= 0
                ? <Col sm="12"><h1 style={{justifyContent: "center"}}>Корзина пуста</h1></Col>
                :
                <Container>
                    <Row>
                        <Col sm="12"><h2>Сумма: {countTotal}</h2><span>,</span> <h2>Товаров: {products.length}</h2></Col>
                        <Col sm="12">
                            <div className="cart__buttons">
                                <button className="cart__btn" onClick={orderStart}>Оформить заказ</button>
                                {/*<button className="cart__btn" onClick={deleteData}>Очистить корзину</button>*/}
                            </div>
                        </Col>
                        {currentTableData.map(product => (
                            <Col
                                sm="6"
                                lg="4"
                                xl="3"
                                key={product.id}
                            >
                                <ProductCard
                                    url={product.url}
                                    key={product.id}
                                    name={product.name}
                                    price={product.price}
                                    color={product.color}
                                    capacity={product.capacity}
                                    id={product.id}
                                />
                            </Col>
                        ))}
                        <Col sm="12">
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={products.length}
                                pageSize={PageSize}
                                onPageChange={page => {
                                    setCurrentPage(page)
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    );
};

export default Cart;