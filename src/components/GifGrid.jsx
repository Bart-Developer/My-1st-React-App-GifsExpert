import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs.jsx'
import { GifGridItem } from './GifGridItem.jsx';


//* ES: COMPONENTE FUNCIONAL ENCARGADO DE MOSTRAR LAS IMAGENES POR PANTALLAS A TRAVES DE UN HOOK QUE CONTIENE TODA LA API QUE DESEA VER EL USUARIO. 

//* EN:  FUNCTIONAL COMPONENT IN CHARGE OF DISPLAYING THE IMAGES BY SCREENS THROUGH A HOOK THAT CONTAINS ALL THE API THAT THE USER WANTS TO SEE.

export const GifGrid = ({ category , numImages }) => {

    const { data:images , loading } = useFetchGifs(category, numImages); //si no se entiende aquí, solo uso el hook useState (custom- Hook), que trae los datos de la api y la cantidad de imagenes que desea ver el usuario. Por otra parte a "data" le seteo un nombre más acorde a la info que me trae al ponerle ":images"
    
    return (

        <>
            <h3 className='card animate__animated animate__fadeIn mt-2 bg-blues'> {category}</h3>
            
            { loading && <p className='card animate__animated animate__flash text-black'> Loading...</p> }

            <div className="card-grid">
                {
                    images.map(img =>
                        <GifGridItem
                            key={img.id}
                            {...img} 
                        />
                    )
                }
            </div>

        </>

    )
}
