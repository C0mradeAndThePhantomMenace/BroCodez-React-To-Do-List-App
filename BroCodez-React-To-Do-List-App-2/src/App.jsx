// App.jsx

/**

https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets
imrc
→	import React, { Component } from 'react'
imp
→	import moduleName from 'module'
imn
→	import 'module'

**/

import React, { useState } from 'react'

import {
  Header,
  Footer,
  MainBody
} from './components'

const App = () => {
  return (
    <>
      <Header />
      <hr />
      <MainBody />
      <hr />
      <Footer />
    </>
  )
}

export default App
