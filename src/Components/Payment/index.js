import './index.scss';
import React from 'react';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Reducer';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment () {
  const [{ basket, user }] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  // Handle the form submission when the "Buy Now" button is clicked
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable the form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Confirm the Card payment using Stripe
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Stripe payment error:', error);
      // Handle payment error, show user a message
    } else {
      // Payment is successful, you can handle success scenario here
      console.log('Stripe payment successful!', paymentMethod);
      // You can add code here to send payment information to your backend
    }
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <span
            aria-label="Navigation"
          >
            {basket?.length} items
          </span>
          )
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment__items">
            {
              basket.map((item, i) => <CheckoutProduct key={`cpi_${i}`} {...item} />)
            }
          </div>
        </div>

        {/* Payment section - Payment Method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              {/* Stripe Card Element */}
              <CardElement />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => {
                    return <h3 className="mt-4">Order Total: {value}</h3>;
                  }}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />

                <button type="submit" className="btn btn-success">
                  <span>Buy Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
