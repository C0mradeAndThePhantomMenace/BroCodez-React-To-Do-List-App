/**
 * App.jsx
 */

import './App.css'
import {
  Header,
  Footer,
  MainBody,
  fakeDataTodos,

} from './componants'

const App = (params) => {
  return (
    <>
      <Header />
      <hr className='hr-main' />
      <MainBody todosListArr={fakeDataTodos} />
      <hr className='hr-main' />
      <Footer />
    </>
  )
}

export default App