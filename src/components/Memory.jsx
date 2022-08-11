import {useState} from 'react'


function Memory(){

    const [logos, setLogos]=useState([])
    const [anterior, setAnterior]=useState()
    const [anterior2, setAnterior2]=useState()

    let gris='public\img\_nada.jpg'

    let todosLogos=[
        { img: 'public\img\cocacola.jpg', isVisible: false, indice: 0
        },
        { img: 'public\img\evian.jpg', isVisible: false, indice: 1
        },
        { img: 'public\img\kitkat.jpg', isVisible: false, indice: 2
        },
        { img: 'public\img\lipton.jpg', isVisible: false, indice: 3
        },
        { img: 'public\img\maggi.jpg', isVisible: false, indice: 4
        },
        { img: 'public\img\milka.jpg', isVisible: false, indice: 5
        },
        { img: 'public\img\mms.jpg', isVisible: false, indice: 6
        },
        { img: 'public\img\oldelpaso.jpg', isVisible: false, indice: 7
        },
        { img: 'public\img\pepsi.jpg', isVisible: false, indice: 8
        },
        { img: 'public\img\pringles.jpg', isVisible: false, indice: 9
        },]



function clica (){
    setLogos(!isVisible)
}

let estilo={
    width:'75px',
    height:'75px',
    backgroundImage: logos ? 'public\img\_nada.jpg' : 'public\img\pringles.jpg'
}

    
    return(
        <>
        <div style={estilo} onClick={clica}/>
        {/* <div style={tabla}>
            <div style={fila}>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
            </div>
            <div style={fila}>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
            </div>
            <div style={fila}>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
            </div>
            <div style={fila}>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
                <div style={celda}></div>
            </div>
        </div>
         */}
        
       </>
    )
}

export default Memory