import './accountsDropDown.scss';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function AccountsDropDown ({ showAccounts }) {
  const [{ user }] = useStateValue();

  return (
    <Container
      className="accountsDropDown"
      hidden={showAccounts}
    >
      {
        !user && (
          <Row className="accountsDropDown__header">
            <Link to="/signin">
              <Button className="signInButton">Sign in</Button>
            </Link>
            <span>New customer? Start here.</span>
          </Row>
        )
      }

      <Row className="accountsDropDown__body">
        <Col className="accountsDropDown__bodyColumn first">
          <span className="accountsDropDown__bodyTitle">Your Lists</span>

          <span className="accountsDropDown__bodyContent">Create a List</span>
          <span className="accountsDropDown__bodyContent">Find a List or Registry</span>
          <span className="accountsDropDown__bodyContent">AmazonSmile Charity Lists</span>
        </Col>

        <Col className="accountsDropDown__bodyColumn">
          <span className="accountsDropDown__bodyTitle">Your Account</span>

          <span className="accountsDropDown__bodyContent">Account</span>
          <span className="accountsDropDown__bodyContent">Orders</span>
          <span className="accountsDropDown__bodyContent">Recommendations</span>
          <span className="accountsDropDown__bodyContent">Browsing History</span>
          <span className="accountsDropDown__bodyContent">Watchlist</span>
          <span className="accountsDropDown__bodyContent">Video Purchases & Rentals</span>
          <span className="accountsDropDown__bodyContent">Kindle Unlimited</span>
          <span className="accountsDropDown__bodyContent">Content & Devices</span>
          <span className="accountsDropDown__bodyContent">Subscribe & Save Items</span>
          <span className="accountsDropDown__bodyContent">Memberships & Subscriptions</span>
          <span className="accountsDropDown__bodyContent">Prime Membership</span>
          <span className="accountsDropDown__bodyContent">Amazon Credit Cards</span>
          <span className="accountsDropDown__bodyContent">Music Library</span>
          <span className="accountsDropDown__bodyContent">Start a Selling Account</span>
          <span className="accountsDropDown__bodyContent">Register for a Business Account</span>
          <span className="accountsDropDown__bodyContent">Customer Service</span>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountsDropDown;
