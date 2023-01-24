import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';
import produtos from '../mocks/productsMock';

function CartProvider({ children }) {
  const [products, setProducts] = useState(produtos);
  const [cart, setCart] = useState([]);

  const contextValue = React.useMemo(() => ({
    products, setProducts, cart, setCart,
  }), [products, cart]);

  useEffect(() => {
    // fazer requisição a getAllProducts
  });

  return (
    <CartContext.Provider
      value={ contextValue }
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CartProvider;