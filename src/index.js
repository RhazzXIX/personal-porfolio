import React, {StrictMode} from 'react'
import  ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
)

const returnNum = (num)  => num

export default returnNum