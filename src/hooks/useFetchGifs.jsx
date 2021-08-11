import { useEffect, useState } from "react"
import { getGifs } from '../Services/getGifs'


//* ES: Este es un Custom Hook, por ello lo desgloso en una carpeta aparte, este mismo está encargado de recuperar una función que es la que hace la petición a la api para luego ser usada en otro componente.
//* EN: // * This is a Custom Hook, so I break it down into a separate folder, it is responsible for retrieving a function that is the one that makes the request to the api and then be used in another component.

export const useFetchGifs = (category, numImages) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    
    // * Este useEffect se va a encargar de renderizar esta función cuando algun valor de caterogy o numImages cambie. 
    // * This useEffect will take care of rendering this function when any value of caterogy or numImages changes.

    useEffect(() => {

        getGifs(category, numImages)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category, numImages])


    return state;

}
