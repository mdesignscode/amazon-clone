import './checkoutProduct.scss';
import React, { useRef } from 'react';
import { useStateValue } from '../StateProvider';

function CheckoutProduct ({ id, image, title, price, rating }) {
  const [, dispatch] = useStateValue();

  const removeItemRef = useRef(id);

  const removeFromBasket = () => {
    const product = removeItemRef.current.classList;
    product.add('removeAnimation');

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id
      });
      product && product.remove('removeAnimation');
    }, 300);

  };

  return (
    <div className="checkoutProduct" id={id} ref={removeItemRef}>
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className='checkoutProduct__info'>
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {
            Array(rating)
              .fill()
              .map(() => {
                return <p>⭐</p>;
              })
          }
        </div>

        <button onPointerDown={removeFromBasket}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
