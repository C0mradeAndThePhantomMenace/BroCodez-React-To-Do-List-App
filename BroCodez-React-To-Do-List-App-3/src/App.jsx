/**
 * App.jsx
 */

import './App.css'
import {
  Header,
  Footer,
  MainBody,

} from './componants'

const App = (params) => {
  return (
    <>
      <Header />
      <hr className='hr-main'/>
      <MainBody />
      <hr className='hr-main'/>
      <Footer />
    </>
  )
}

export default App