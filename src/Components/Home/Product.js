import './product.scss';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useStateValue } from '../StateProvider';

function Product ({ title, image, price, rating, id }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch item into data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating)
              .fill()
              .map(() => {
                return <p>⭐</p>;
              })
          }
        </div>
      </div>

      <img
        src={image}
        alt=""
      />

      <Button onPointerDown={addToBasket}>Add to Cart</Button>
    </div>
  );
}

export default Product;
