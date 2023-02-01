import React from 'react';
import { Link } from 'react-router-dom';

export default function NavAdminManage() {
  return (
    <div className="navbar-customer">
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        Gerenciar Usuários
      </Link>
    </div>
  );
}
