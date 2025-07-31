import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'

// Import store and React Router
import store from './app/store'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import App from './App'
import PageCoffee from './pages/PageCoffee'


// Import pages/components


const router = createBrowserRouter([
  {path:'/', element: <PageCoffee />},
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
