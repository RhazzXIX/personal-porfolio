import React, {StrictMode} from 'react'
import  ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import App from './components/App'
import './index.html'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)

const returnNum = (num)  => num

export default returnNum