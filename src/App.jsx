// import Password from './components/Password';
import {useState} from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import ToDo_list from './components/To-Do_list'
import Random from './components/Random'

function App() {

  return(
    <>
    <ToDo_list/>

    <Random/>
    </>
  )
  
}

export default App




 {/* esto es de los componentes password y bola
      <Password secret={[0,0,1,1,0,1]} /> */}
