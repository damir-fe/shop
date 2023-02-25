import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

import "./ProductInfo.scss"

const ProductInfo = ({products}) => {
    const navigate = useNavigate();
    
    const [item, setItem] = useState([]);
    const [color, setColor] = useState(products.color);
    const [name, setName] = useState(products.name);
    const [capacity, setCapacity] = useState(products.capacity);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(products.price);
    const [url, setUrl] = useState(products.url);

    const addUser = (e) => {
        e.preventDefault()
        if (color && name && capacity && quantity && price && url) {
            fetch("http://localhost:3001/cart", {
                method: "POST",
                body: JSON.stringify({
                    color,
                    name,
                    capacity,
                    quantity,
                    price,
                    url,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then(response => response.json())
                .then(data => {
                    setItem([...item, data])
                    navigate("/cart")
                })
        }
        else {
            alert('Что-то пошло не так, обновите страницу и попробуйте снова')
        }
    }
    
    return (
        <div className="productInfo">
            <div className="rating">
                <span className="rating__title"></span>
                <div className="rating__block">
                    <div className="rating__block-star">
                        {products.brand}
                    </div>
                    <div className="rating__block-num">{products.rating} отзыва</div>
                </div>
            </div>
            <div className="productInfo__title">{products.name}</div>
            <form action="">
                <div className="productInfo__color">
                    <div className="productInfo__text">Цвет: <span>{color}</span></div>
                    <input type="radio" name="color" value={color} onChange={e => setColor(e.target.value)} required defaultChecked />
                    <input type="radio" name="color" value="Белый" onChange={e => setColor(e.target.value)}/>
                    <input type="radio" name="color" value="Красный" onChange={e => setColor(e.target.value)}/>
                </div>
                <div className="productInfo__capacity">
                    <div className="productInfo__text">Память: <span>{capacity}</span></div>
                    <input type="radio" name="capacity" value={capacity} onChange={e => setCapacity(e.target.value)} required defaultChecked/>
                    <input type="radio" name="capacity" value="256" onChange={e => setCapacity(e.target.value)}/>
                    <input type="radio" name="capacity" value="512" onChange={e => setCapacity(e.target.value)}/>
                </div>
                <div className="productInfo__quantity">
                    <div className="productInfo__text">Количество: <span>{quantity}</span></div>
                    <input type="range" max="5" step="1" min="1" id="quantity" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
                </div>
                <div className="productInfo__price">
                    Цена: <span>{products.price}.00 Р</span>
                </div>
                <button className="productInfo__btn" onClick={addUser}>Добавить в корзину</button>
            </form>
            <div className="productInfo__about">
                <div className="productInfo__about-title">О товаре</div>
                <div className="productInfo__about-description">The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system.</div>
            </div>
        </div>
    );
};

export default ProductInfo;