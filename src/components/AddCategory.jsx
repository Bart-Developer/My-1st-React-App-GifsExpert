import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';


//* ES: COMPONENTE FUNCIONAL ENCARGADO DEL INPUT 
//* EN: FUNCTIONAL COMPONENT IN CHARGE OF THE INPUT

export const AddCategory = ({ setCategories }) => {

    //Hooks
    const [inputValue, setInputValue] = useState('');

    //Functions

    // * Función simple para setear a mi hook el valor ingresado en mi input ↓
    // * Simple function to set my hook the value entered in my input ↓

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }


    /*  

    ESPAÑOL VERSION: 

    * Esta función  recibe el valor ingresado en el input encargado de busqueda, 
    * luego deshabilito el evento del submit para el efecto reactivo,  
    * el if que verán dentro solo controla que el valor ingresado contenga al menos 3 letras.
    
    ENGLISH VERSION: 

    * This function receives the value entered in the search input,
    * then I disable the submit event for the reactive effect,
    * the (if) you will see inside only controls that the entered value contains at least 3 letters.
    
    */

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {

            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    // Esto es solo un simple input ↓ 
    // This just is a simple input ↓


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Example: Dragon Ball Z" aria-label="Dragon Ball Z" aria-describedby="button-addon2"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-outline-secondary text-success" type="submit" id="button-addon2">Go!</button>
                </div>
            </form>
        </>
    )
}

/* 
ESPAÑOL VERSION: 

* Esto controla un error que se podría generar al trabajar en equipo, de esta forma al generarse un error, informaría por pantalla que el parámetro/props setCategories es requerido 
* para poder trabajar en este componente.

ENGLISH VERSION:

* This controls an error that could be generated when working in a team, in this way when an error is generated, it would inform on the screen that the / props setCategories parameter is required
* to be able to work on this component.

*/

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}