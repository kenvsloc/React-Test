import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store.ts'

import './index.css'
import App from './App.tsx'

import Home from './pages/Home.tsx'
import CoffeProduct from './pages/CoffeProduct.tsx'
import TeaProduct from './pages/TeaProp.tsx'
import SmoothieProduct from './pages/SmoothieProp.tsx'
import ProductPage from './components/ProductDetail.tsx'

import AdminPanel from './components/layouts/AdminPanel.tsx'
import SalesUser from './pages/SalesUser.tsx'
import CartPayment from './pages/CartPayment.tsx'


// import store from './app/store'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.tsx'


// cau hinh router
const router = createBrowserRouter([
  {path:"/", element: <App />,
    children:[
      {index:true ,element: <Home />},
      {path:'coffee' ,element: <CoffeProduct />},
      {path:'tea' ,element: <TeaProduct />},
      {path:'smoothie' ,element: <SmoothieProduct />},
      {path: '/payment', element: <CartPayment />},
      {path: '/coffee/:id', element: <ProductPage />},
      {path: '/tea/:id', element: <ProductPage />},
      {path: '/smoothie/:id', element: <ProductPage />},
    ],
  },
  {path: '/dashboard', element: <AdminPanel />},
  {path: '/sales', element: <SalesUser />},

  {path: '*', element: <NotFoundPage />},


])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
