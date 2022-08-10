import {useState} from 'react'
import './Bola.css'


function Password (props){
    const [valores, setValors] = useState(props.secret.map(e => 0));

    let bola = props.secret.map((e,i) => <div key={i} className={valores[i] ? 'bola' : 'bola gris'} onClick={()=>cambiaValores(i)}/> )   

function cambiaValores(indice){
    let temp_array = [...valores];
    temp_array [indice]= !temp_array[indice];
    setValors(temp_array);
};
    

    return(

        <>
        {bola}
        </>

    )
    }

export default Password


