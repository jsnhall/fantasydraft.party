import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'

export default function App() {
  return (
    <>
      <Header />
    </>
  )
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'))
}
