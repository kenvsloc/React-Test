import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'

// Import store and React Router
import store from './app/store'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


// Import pages/components


const router = createBrowserRouter([
  {path:'/', element: <App />},
]);


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
