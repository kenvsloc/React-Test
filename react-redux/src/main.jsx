// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store'
 // Assuming you have a store.js file that exports your
createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
  </Provider>
)
