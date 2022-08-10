// import Password from './components/Password';
import {useState} from 'react'
import {Row, Col, Container} from 'react-bootstrap'

function App() {
 
  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState('')

  const nuevaTarea=(e)=>{setTareas([...tareas, tarea])}
    
 

    const eliminaTareas=(e)=> setTareas(tareas.splice())
  


  
  console.log('nueva tarea añadida', tarea)

  let estilo = {
    cursor: 'pointer',
    height: '35px',
    width: '200px',
  }
 
  let listaTareas= tareas.map((e)=><li><div key={tareas.index} style={estilo} onClick={eliminaTareas}>{e}</div></li>)

console.log(tareas)

  return(
    <Container>
     <Row>
      <Col>
        <input type='text' onChange={e=>setTarea(e.target.value)} value={tarea}></input>
        <button onClick={nuevaTarea}>Añadir</button>
      </Col>
      <Col>
      {listaTareas}
      </Col>
     </Row>
    </Container>
  )
  
}

export default App




 {/* esto es de los componentes password y bola
      <Password secret={[0,0,1,1,0,1]} /> */}
