import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'

// Import store and React Router
import store from './app/store'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


// Import pages/components
import App from './App'
import NotFoundPage from './pages/NotFoundPage'
// import PageWomenShirt from './components/layout/ProductFemaleShirt'
import ProductDetail from './components/productFashion/ProductDetail'
import PageKidShirt from './components/layout/ProductKid'
import Home from './pages/Home'
import PageMenShirts from './pages/PageMenShirts'
import PageWomenShirts from './pages/FashionFemale'
import ManagementAdmin from './pages/ManagementAdmin'
import UserOrder from './pages/UserOrder'

//

// Cấu hình router
const router = createBrowserRouter([
  {path:'/', element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/women', element: <PageWomenShirts />},
      {path: '/men', element: <PageMenShirts />},
      {path: '/kids', element: <PageKidShirt />},
      {path: '/men/:id', element: <ProductDetail />},
      {path: '/women/:id', element: <ProductDetail />},
      {path: '/kids/:id', element: <ProductDetail />},
    ],
  },
  // dashBoard
  // {path: '/dashboard/:id', element: <Dashboarditems />}, // Dynamic route for dashboard items
  {path: '/dashboard', element: <ManagementAdmin />},
  {path: '/sales', element: <UserOrder />},

  // 404 Error
  {path: '*', element: <NotFoundPage />},
  // {path: '/board/:id', element: <App2items />} // Catch-all route for 404 Not Found

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
