import React from 'react';
import EGO from '../assets/EGO.svg';

const Nav = () => {
    return (
        <div>
            <nav className="white">
            <div className="nav-wrapper">
              <a href="#!" className="left brand-logo"><img alt="EGO" src={EGO} /></a>
              <a href="#!" data-target="mobile-demo" className="sidenav-trigger right show-on-large"><i className="material-icons black-text">menu</i></a>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li><a href="#!">Modelos</a></li>
            <li><a href="#!">Ficha Tecnica</a></li>
            <li><a href="#!">Servicios y Accesorios</a></li>
            <li><a href="#!">Financiación</a></li>
            <li><a href="#!">Reviews y Comunidad</a></li>
            <hr/>
            <li><a href="#!">Toyota Mobility Service</a></li>
            <li><a href="#!">Toyota Ganzoo Racing</a></li>
            <li><a href="#!">Toyota Hibridos</a></li>
            <hr/>
            <li><a href="#!">Concesionarios</a></li>
            <li><a href="#!">Test Drive</a></li>
            <li><a href="#!">Contacto</a></li>
            <hr/>
            <li><a href="#!">Actividades</a></li>
            <li><a href="#!">Servicios al Cliente</a></li>
            <li><a href="#!">Ventas Especiales</a></li>
            <li><a href="#!">Innovación</a></li>
            <li><a href="#!">Prensa</a></li>
            <li><a href="#!">Acerca de..</a></li>
          </ul>
        </div>
    );
}

export default Nav;