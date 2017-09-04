import React from 'react'
// components
import People from 'material-ui-icons/People'
import ViewList from 'material-ui-icons/ViewList'
import TrendingUp from 'material-ui-icons/TrendingUp'
import ShoppingCart from 'material-ui-icons/ShoppingCart'
// public pages
import Login from './pages/Login'
import About from './pages/About'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
// admin pages
import Admin from './pages/Admin'
import Orders from './pages/Orders'
import Drafts from './pages/Drafts'
import AddOrder from './pages/AddOrder'
import SearchOrders from './pages/SearchOrders'
import Product from './pages/Product'
import Products from './pages/Products'
import Inventory from './pages/Inventory'
import AddProduct from './pages/AddProduct'
import SearchProducts from './pages/SearchProducts'
import Customers from './pages/Customers'

const routes = [
  { path: '/admin',
    private: true,
    title: 'Admin',
    component: Admin,
  },
  { path: '/login',
    exact: true,
    title: 'Login',
    component: Login
  },
  { path: '/register',
    exact: true,
    title: 'Register',
    component: Register
  },
  { path: '/reset-password',
    exact: true,
    title: 'Reset Password',
    component: ResetPassword
  },
]

export const adminRoutes = [
  { path: '/admin/orders',
    exact: true,
    private: true,
    title: 'Orders',
    icon: <ShoppingCart />,
    component: Orders,
    routes: [
      { path: '/admin/orders/index',
        title: 'View',
        component: Orders
      },
      { path: '/admin/orders/add',
        title: 'Add an Order',
        component: AddOrder
      },
      { path: '/admin/orders/drafts',
        title: 'Drafts',
        component: Drafts
      },
      { path: '/admin/orders/search',
        title: 'Search Orders',
        component: SearchOrders
      },
    ]
  },
  { path: '/admin/products',
    exact: true,
    private: true,
    title: 'Products',
    icon: <ViewList />,
    component: Products,
    routes: [
      { path: '/admin/products/index',
        title: 'View',
        component: Products
      },
      { path: '/admin/products/:id(\\d+\\w+)',
        title: 'Detail',
        component: Product
      },
      { path: '/admin/products/add',
        title: 'Add a Product',
        component: AddProduct
      },
      { path: '/admin/products/inventory',
        title: 'Inventory',
        component: Inventory
      },
      { path: '/admin/products/search',
        title: 'Search Products',
        component: SearchProducts
      },
      { path: '/admin/products/reviews',
        title: 'Product Reviews',
        component: SearchProducts
      },
    ]
  },
  { path: '/admin/customers',
    exact: true,
    private: true,
    title: 'Customers',
    icon: <People />,
    component: Customers,
    routes: [
      { path: '/admin/customers/index',
        title: 'View',
        component: Customers
      },
      { path: '/admin/customers/add',
        title: 'Add a Product',
        component: AddProduct
      },
      { path: '/admin/customers/inventory',
        title: 'Inventory',
        component: Inventory
      },
      { path: '/admin/customers/search',
        title: 'Search Products',
        component: SearchProducts
      },
      { path: '/admin/customers/reviews',
        title: 'Product Reviews',
        component: SearchProducts
      },
    ]
  },
  { path: '/admin/reports',
    exact: true,
    private: true,
    title: 'Reports',
    icon: <TrendingUp />,
    component: Products,
    routes: [
      { path: '/admin/reports/index',
        title: 'View',
        component: Products
      },
      { path: '/admin/reports/add',
        title: 'Add a Product',
        component: AddProduct
      },
      { path: '/admin/reports/inventory',
        title: 'Inventory',
        component: Inventory
      },
      { path: '/admin/reports/search',
        title: 'Search Products',
        component: SearchProducts
      },
      { path: '/admin/reports/reviews',
        title: 'Product Reviews',
        component: SearchProducts
      },
    ]
  },
]

export default routes