import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import pages/components
import App from './App'
import NotFoundPage from './pages/NotFoundPage'
import ProductList from './components/layout/ProductFemaleShirt'
import ProductDetail from './components/productFashion/ProductDetail'
import ProductList3 from './components/layout/ProductKid'
import Home from './pages/Home'
import PageMenShirts from './pages/PageMenShirts'
import ManagementAdmin from './pages/ManagementAdmin'

// React Router
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// Cấu hình router
const router = createBrowserRouter([
  {path:'/', element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/women', element: <ProductList />},
      {path: '/men', element: <PageMenShirts />},
      {path: '/kids', element: <ProductList3 />},
      {path: '/men/:id', element: <ProductDetail />},
      {path: '/women/:id', element: <ProductDetail />},
      {path: '/kids/:id', element: <ProductDetail />},
    ],
  },
  // dashBoard
  // {path: '/dashboard/:id', element: <Dashboarditems />}, // Dynamic route for dashboard items
  {path: '/dashboard', element: <ManagementAdmin />},
  {path: '/sales', element: <ManagementAdmin />},

  // 404 Error
  {path: '*', element: <NotFoundPage />},
  // {path: '/board/:id', element: <App2items />} // Catch-all route for 404 Not Found

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
