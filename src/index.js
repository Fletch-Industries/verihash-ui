import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import BabbagePrompt from '@babbage/react-prompt'

ReactDOM.render(
  <BabbagePrompt
    customPrompt
    appName='VeriHash'
    author='Fletch Industries'
    authorUrl='https://fletchindustries.com'
    description='Safeguarding Secrets with Confident Security'
    // appIcon='/images/veriHashLogo.png'
    // appImages={[]}
  >
    <App />,
  </BabbagePrompt>,
  document.getElementById('root')
)
