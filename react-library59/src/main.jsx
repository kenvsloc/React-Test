import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import NotFoundPage from './components/NotFoundPage'


import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:'/', element: <App />},// Dynamic route for dashboard items
  {path: '*', element: <NotFoundPage />},
  // {path: '/board/:id', element: <App2items />} // Catch-all route for 404 Not Found
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
