import React from 'react'

//* Componente funcional encargado de pintar los datos en la forma que quiero que se estructuren el mismo está mapeado por el componente GifGrid.
//* Functional component in charge of painting the data in the way I want it to be structured, it is mapped by the GifGrid component.


export const GifGridItem = ( { tittle, url:img } ) => {
    
    return ( 

        <div className='card animate__animated animate__fadeIn animate__delay-1s bg-blues' >

            <img src={ img } alt={ tittle } />
            <p> { tittle }</p>
            
        </div>
    )
}
