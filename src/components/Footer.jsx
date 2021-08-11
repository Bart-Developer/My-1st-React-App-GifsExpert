import React from 'react'
import { $ } from 'react-jquery-plugin'

//* COMPONENTE FUNCIONAL ENCARGADO DE MOSTRAR EL FOOTER 
// * FUNCTIONAL COMPONENT IN CHARGE OF DISPLAYING THE FOOTER

export const Footer = () => {


    //Functions
    const goToTop = () =>{
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }

    return (

        <div className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">Junior developer, I started my career in 2021 for loving technology in a virtual Bootcamp.

                            Today, I have experience in developing responsive web applications in full java stack, using:

                            For the frontend I use frameworks like Vue.js & Vue CLI -V 3.x and React.js.

                            For backend I use Java with frameworks like Spring Boot with Maven and Gradle support. And on the other hand Mongo to develop applications for cell phones.

                            I am currently studying Kotlin and Python.

                            Other technologies that I currently use:

                            HTML
                            Flex Box
                            Agile
                            JavaScript
                            Jquery
                            Pug
                            Css 3
                            Sass
                            Ajax
                            Json
                            Apis
                            Bootstrap 5
                            Test Driven D-
                            SQL</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><a href="https://github.com/Bart-Developer/Home-Banking">VUE.JS</a></li>
                            <li><a href="https://github.com/Bart-Developer/Home-Banking">VUE CLI</a></li>
                            <li><a href="https://github.com/Bart-Developer/Home-Banking">JAVA</a></li>
                            <li><a href="https://github.com/Bart-Developer/Home-Banking">HTML5</a></li>
                            <li><a href="https://github.com/Bart-Developer/Home-Banking">SPRING BOOT</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="https://github.com/Bart-Developer">About Me</a></li>
                            <li><a href="https://wa.link/w6fkb9">Contact Me</a></li>
                            <li><button type="button" className="btn btn-outline-secondary mt-2" onClick={goToTop}>Go to Top</button> </li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2021 - Bartolomé Albarracin -
                            <a href="https://www.linkedin.com/in/bartolomealbarracin/"> Contact Me</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="https://www.facebook.com/BartProfile/"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="GitHub" href="https://github.com/Bart-Developer"><i className="fa fa-github"></i></a></li>
                            <li><a className="linkedin" href="https://www.linkedin.com/in/bartolomealbarracin/"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
