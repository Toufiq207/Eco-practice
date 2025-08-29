import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App' // ✅ Import App component
import './index.css'

import store from './store'
import { Provider } from 'react-redux'

import firebaseConfig from './firebaseConfig'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)