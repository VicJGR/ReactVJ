import {useMemo,useState} from 'react'


function PTP (){
    
    
    const[aleatorio, setAleatorio]= useState('')
    const[miopcion, setMiOpcion]=useState('')
   

    const opciones=['tijeras','papel','piedra']
    
    
    function respuestaMaquina(){
        let valor = Math.floor ( Math.random() * 3 )
        setAleatorio(opciones[valor])
    }

    console.log('respuesta maquina',aleatorio)

    console.log(miopcion);


// el useMemo no lo entiendo, al igual que tampoco entiendo lo de que haya mas de 1 return
// ni porque le paso al final los valores aleatorio y miopcion

    let resultado= useMemo(()=>{


            if (aleatorio === miopcion) {
                return `Empate!`;
              } else {
                if (
                  (aleatorio === "piedra" && miopcion === "tijeras") ||
                  (aleatorio === "papel" && miopcion === "piedra") ||
                  (aleatorio === "tijeras" && miopcion === "papel")
                ) {
                  return "Pierdes";
                }
                return "Ganaste!";
        }},[aleatorio, miopcion]);

    let ipiedra="https://i.pinimg.com/236x/d5/ab/ec/d5abec74cf53c50f3c586c9a06421628--how-to-draw-realistic-arthurs-seat.jpg"
    let itijera='https://www.conmishijos.com/assets/posts/7000/7775-tijeras-abiertas.jpg'
    let ipapel='https://cdn5.dibujos.net/dibujos/pintar/hoja-de-papel.gif'
    let estilo={
        width:'150px',
        display:'inline-block'
    }
    return(
        <>
        <img style={estilo} id='1' onClick={()=>{setMiOpcion('piedra'),respuestaMaquina()}} src={ipiedra}/>
        <img style={estilo} id='0' onClick={()=>{setMiOpcion('tijera'),respuestaMaquina()}} src={itijera}/>
        <img style={estilo} id='2' onClick={()=>{setMiOpcion('papel'),respuestaMaquina()}} src={ipapel}/>

        <p>{resultado}</p>
        
        </>
    )
}

export default PTP