# COMFY STORE

This project allows users to perform various actions related to shopping, including user authentication, product browsing, cart management, order placement, and order history.

## Features

1. **User Authentication**:

   - Users can register and login securely to access the website's features.

2. **Product Management**:

   - Users can view a list of products, filter them based on
     different criteria and paginate through the results.
   - Products can be added to the cart.
   - Cart items can be updated (quantity) or removed.

3. **Checkout and Order Placement**:

   - Users can proceed to checkout to place their orders securely
   - Order details are stored for reference.

4. **Order History**:
   - Users can view their recent orders.

## Technologies Used

- **React with TypeScript**: A powerful combination for building scalable and type-safe web applications.
- **Redux Toolkit**: For efficient and predictable state management.
- **DaisyUI and Tailwind CSS**: For beautiful and responsive UI design.
- **Axios**: For making HTTP requests to fetch and update data.
- **React Router DOM**: For declarative routing in the application.
- **React Query**: For efficient caching and data synchronization.

## Folder Structure

```
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   ├── Cart/
│   │   ├── ProductList/
│   │   └── ...
│   ├── pages/
│   │   ├── Home/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   └── ...
│   ├── features/
│   │   ├── cart
│   │   └── user
│   ├── interfaces/
│   │   ├── index.ts
│   ├── utils/
│   │   ├── index.ts
│   └── ...
├── public/
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```
