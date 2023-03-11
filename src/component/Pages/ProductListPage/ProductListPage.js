import React, {useMemo, useState} from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useFetch from "../../../hooks/useFetching";
import ProductCard from "../../productCard/ProductCard";
import {SearchFunc} from "../../UI/Search/Search";

import "../../UI/Search/Search.scss"
import Pagination from "../../Pagination/Pagination";

let PageSize = 8;

const ProductListPage = () => {    
    const { products, error, isLoading } = useFetch("http://localhost:3001/products");

    const [query, setQuery] = useState("");
    const [searchParam] = useState(["name"]);
    
    const search = SearchFunc(products, searchParam, query);

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return search.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, search]);

    
    if (isLoading) {
        return <div style={{textAlign: "center"}}>Загрузка..</div>
    }
    if (error) {
        return <div><h1 style={{justifyContent: "center"}}>{error}</h1></div>
    }
    
    return (
        <div className="product-list">
            <Container>
                <Row>
                    <Col sm="12" lg="8">
                        <h1>Каталог товаров</h1>
                    </Col>
                    <Col lg="4">
                        <div className="search">
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="search-input"
                                placeholder="iPhone..."
                            />
                            <button className="search-btn" type="submit">Искать</button>
                        </div>
                    </Col>
                    {currentTableData.length <= 0
                        ? <div><h1 style={{justifyContent: "center", margin: "40px 0"}}>Ничего не найдено</h1></div>
                        : ''
                    }
                    {currentTableData.map(product => (
                        <Col
                            sm="6"
                            lg="4"
                            xl="3"
                            key={product.id}
                        >
                            <ProductCard
                                url={product.url}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                color={product.color}
                                capacity={product.capacity}
                                brand={product.brand}
                            />
                        </Col>
                    ))}
                    <Col sm="12">
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={search.length}
                            pageSize={PageSize}
                            onPageChange={page => {
                                setCurrentPage(page)
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductListPage