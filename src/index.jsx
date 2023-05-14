import React, {StrictMode} from 'react'
import  ReactDOM from 'react-dom/client'
import './styles/index.css'
import Projects from './components/Projects'
import './index.html'

const projectSection = ReactDOM.createRoot(document.getElementById("projects"))

projectSection.render(
  <StrictMode>
    <Projects/>
  </StrictMode>
)
