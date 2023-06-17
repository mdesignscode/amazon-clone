import './index.scss';
import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Reducer';
import axios from '../Axios';

function Payment () {
  const [{ basket, user }] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async e => {
    e.preventDefault();
    setProcessing(true);

    await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntend }) => {
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      navigate('/orders', { replace: true });
    });
  };

  const handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <span
            aria-label="Navigation"
            onPointerDown={e => navigate('/checkout')}
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

          <div className="payment__details" onSubmit={handleSubmit}>
            {/* Stripe Magic🌠🪄 */}

            <form>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => {
                    return (<h3 className="mt-4">Order Total: {value}</h3>);
                  }}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button className="btn btn-success" disabled={processing || disabled || succeeded}>
                  <span>
                    {processing ? <p>Processing</p> : "Buy Now"}
                  </span>
                </button>
              </div>

              {/* Error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
