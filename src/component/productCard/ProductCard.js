import React from 'react';
import './ProductCard.scss'
import {useNavigate} from "react-router-dom";

const ProductCard = (props) => {
    const navigate = useNavigate();
    return (
        <div 
            onClick={() => navigate(`/shop/${props.id}`)} 
            className="product-card"
        >
            <div className="product-card__img">
                <img src={props.url} alt={props.name}/>
            </div>
            <div className="product-card__title">{props.name}, {props.capacity}ГБ, {props.color}</div>
            <div className="product-card__price">{props.price} &#8381;</div>
        </div>
    );
};

export default ProductCard;