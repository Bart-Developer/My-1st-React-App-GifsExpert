import React, { useEffect, useState } from 'react'
import { AddCategory } from './components/AddCategory.jsx'
import { GifGrid } from './components/GifGrid.jsx'
import { $ } from 'react-jquery-plugin'
import { Footer } from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


//* ES: COMPONENTE FUNCIONAL -> PADRE.  ENCARGADO DE LA VISTA DE LA APP. 
//* EN: FUNCTIONAL COMPONENT -> FATHER. MANAGER OF THE APP VIEW.

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);
    const [numImages, setNumImages] = useState(15)

    //hooks
    useEffect(() => {
        selectedEffect();
    }, [])


    //functions
    const handleAdd = (num) =>{
         setNumImages(num);    
    }

    const selectedEffect = () => {

        $(document).ready(function () {
           
            $(".selLabel").click(function () {
                $('.dropdown').toggleClass('active');
            });

            $(".dropdown-list li").click(function () {
                $('.selLabel').text($(this).text());
                $('.dropdown').removeClass('active');
                $('.selected-item p span').text($('.selLabel').text());
            });

        });

    }

    return (

        <div>

            <div className="contain d-flex flex-row justify-content-between">

                <h2 className='mt-5 text-center'>Gift Expert App | Find Yours Favorite Gifs </h2>

                <div>
                    <div className="selected-item">
                        <p>Selected : <span>15</span></p>
                    </div>

                    <div className="dropdown">
                        <span className="selLabel">How Many Images?</span>
                        <input type="hidden" name="cd-dropdown" />
                        <ul className="dropdown-list">
                            <li onClick={e => handleAdd(e.target.offsetParent.id)} id="15">
                                <span>15 Images</span>
                            </li>
                            <li onClick={e => handleAdd(e.target.offsetParent.id)} id="25">
                                <span>25 Images</span>
                            </li>
                            <li onClick={e => handleAdd(e.target.offsetParent.id)} id="35">
                                <span>35 Images</span>
                            </li>
                            <li onClick={e => handleAdd(e.target.offsetParent.id)} id="50">
                                <span>50 Images</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {

                    categories.map(category =>
                        <GifGrid
                            key={ category }
                            category={ category }
                            numImages={ numImages } />
                    )

                }

            </ol>
            
            <>

            <Footer />

            </>

        </div>


    )
}

export default GiftExpertApp;
