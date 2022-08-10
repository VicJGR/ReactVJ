import {useState} from 'react'


function Random (){

    const[aleatorio, setAleatorio]= useState('')
    const[aleatorio2, setAleatorio2]= useState('')
    const[aleatorio3, setAleatorio3]= useState('')

    
    function calcula(){
        let valor = Math.floor ( Math.random() * 50 )
        let valor2 = Math.floor ( Math.random() * 50 )
        let valor3 = Math.floor ( Math.random() * 50 )
        setAleatorio(valor)
        setAleatorio2(valor2)
        setAleatorio3(valor3)
       


    }

let estilo ={
    width: '50px',
    height: '50px',
    display: 'inline-block',
    borderRadius: '100%',
    backgroundColor: 'gold',
    margin: '5px',
    lineHeight:'50px',
    textAlign:'center'
    }

    return(
        <>
        <div style={estilo} >{aleatorio}</div>
        <div style={estilo} >{aleatorio2}</div>
        <div style={estilo} >{aleatorio3}</div>
        
        <button onClick={calcula}>Aleatorio</button>
        
        </>
    )
}

export default Random