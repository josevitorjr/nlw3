import React from 'react'

import {FiArrowRight} from 'react-icons/fi';

import '../styles/global.css';
import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';
function Landing (){
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Logo da Happy"/>

                <main>
                <h1>Leve felicidadde para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                <strong>Resende</strong>
                <span>Rio de Janeiro</span>
                </div>

                <a href="" className="enter-app">
                <FiArrowRight size={26} color="rgba(0,0,0, 0.6)"/>
                </a>
            </div>
        </div>
    );
}

export default Landing;