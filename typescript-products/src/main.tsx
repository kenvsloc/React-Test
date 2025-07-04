import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import App2 from './App2'
import Dashboard from './dashBoard'
import NotFoundPage from './components/NotFoundPage'
import Dashboarditems from './Dashboarditems'


import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:'/', element: <App />},
  {path: '/board', element: <App2 />},
  {path: '/dashboard/:id', element: <Dashboarditems />}, // Dynamic route for dashboard items
  {path: '/dashboard', element: <Dashboard />},
  {path: '*', element: <NotFoundPage />},
  // {path: '/board/:id', element: <App2items />} // Catch-all route for 404 Not Found

]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
