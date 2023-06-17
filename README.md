<h1>Amazon Clone</h1>

This is an Amazon clone web application built with React, Bootstrap, and Stripe integration. It allows users to browse products, manage orders, complete the checkout process, and authenticate themselves.

# Table of contents
- [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Stripe Integration](#stripe-integration)

## Features

    Product Listing: Users can browse and search for products available on the platform. The product listing provides essential information such as product name, description, price, and availability.

    Order Management: Users can view their orders and manage them efficiently. They can track the status of their orders, view order details, and perform actions like canceling or returning items.

    Checkout Process: Users can add products to their cart, review the items, and proceed to the checkout process. During checkout, users can provide shipping and billing details and select their preferred payment method.

    User Authentication: Users can create accounts, log in, and manage their profile information. User authentication ensures secure access to the application's features and personalized experiences.

## Requirements

To run this project locally, you need to have the following:

    Node.js (version 12 or above)
    npm (Node Package Manager) or Yarn

## Installation

  Clone the repository to your local machine:

```bash
git clone https://github.com/mdesignscode/amazon-clone.git
```

Change to the project directory:

```bash
cd amazon-clone
```
Install the dependencies:
```bash
npm install
```

or
```bash
yarn install
```

## Usage

  Start the development server:

```bash
npm start
```
or

```bash
yarn start
```

This command will start the application on a local server and open it in your default web browser.

You can now explore the Amazon clone web application, browse products, manage orders, and complete the checkout process.

## Stripe Integration

This project integrates with Stripe for payment processing. To enable Stripe integration, you need to perform the following steps:

    Sign up for a Stripe account if you don't have one.

    Obtain your Stripe API keys (publishable key and secret key) from the Stripe dashboard.

    Set your Stripe API keys in the project. Look for the Stripe configuration file or environment variables and update them with your keys.

    Update the Stripe webhook endpoint in your Stripe dashboard to receive events related to payment processing.

    Make sure to handle Stripe webhook events on your backend server for order and payment processing.
