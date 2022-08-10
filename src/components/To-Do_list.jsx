import {useState} from 'react'
import {Row, Col, Container} from 'react-bootstrap'

function ToDo_list (){

    const [tareas, setTareas] = useState([])
    const [tarea, setTarea] = useState('')
  
    const nuevaTarea=(e)=>{setTareas([...tareas, tarea])}
    
  
      function eliminarTareas(e) { 
        // esto de aqui abajo es lo me cuesta un poco mas, ar es cualquier cosa, yo lo he querido llamar ar
        // 
        let new_array = tareas.filter((ar)=> ar != e) 
        setTareas(new_array ) 
      }
  
    console.log('nueva tarea añadida', tarea)
  
    let estilo = {
      cursor: 'pointer',
      height: '35px',
      width: '200px',
    }
   
    let listaTareas= tareas.map((e,i)=><li><div key={i} style={estilo} onClick={()=>eliminarTareas(e)}>{e}</div></li>)
  
  console.log(tareas)
  
    return(
      <Container>
       <Row>
        <Col>
          <input type='text' onChange={e=>setTarea(e.target.value)} value={tarea}></input>
          <button onClick={nuevaTarea}>Añadir</button>
        </Col>
        <Col>
        <ul>
  
        {listaTareas}
        </ul>
        </Col>
       </Row>
      </Container>
      )


}
export default ToDo_list