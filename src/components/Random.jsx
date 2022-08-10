import {useState} from 'react'


function Random (){

    const[aleatorio, setAleatorio]= useState('')
    const[aleatorio2, setAleatorio2]= useState('')
    const[aleatorio3, setAleatorio3]= useState('')

    
    function calcula(){
        var valor = Math.floor ( Math.random() * 50 )
        var valor2 = Math.floor ( Math.random() * 50 )
        var valor3 = Math.floor ( Math.random() * 50 )
        setAleatorio(valor)
        setAleatorio2(valor2)
        setAleatorio3(valor3)
       


    }

let estilo ={
    width: '40px',
    height: '40px',
    display: 'inline-block',
    borderRadius: '100%',
    backgroundColor: 'gray',
    margin: '5px',
    lineHeight:'40px',
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