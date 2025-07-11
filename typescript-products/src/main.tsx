import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import pages/components
import App from './App'
import NotFoundPage from './components/NotFoundPage'
import ProductList from './components/layout/ProductList'
import ProductDetail from './components/layout/ProductDetail'
import Home from './pages/Home'
import ManagementAdmin from './pages/ManagementAdmin'

// React Router
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// Cấu hình router
const router = createBrowserRouter([
  {path:'/', element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/products', element: <ProductList />},
      {path: '/products/:id', element: <ProductDetail />
      },
    ],
  },
  // dashBoard
  // {path: '/dashboard/:id', element: <Dashboarditems />}, // Dynamic route for dashboard items
  {path: '/dashboard', element: <ManagementAdmin />},
  {path: '/men', element: <ManagementAdmin />},

  // 404 Error
  {path: '*', element: <NotFoundPage />},
  // {path: '/board/:id', element: <App2items />} // Catch-all route for 404 Not Found

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
