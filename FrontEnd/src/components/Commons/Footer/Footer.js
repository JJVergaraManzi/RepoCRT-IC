import React, {Component} from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import logoCorfo from '../../../assets/logoCorfo.png'
 
 export default class Footer extends Component {
    render() {
       return (
        <div>
        <footer className = "text-white py-4  bg-dark ">
            <div className='container'>
                <nav className='row '>
                    <ul className='col-12 col-md-4 list-unstyled'>
                        <li className='text-center'>
                            SÍGUENOS EN REDES 
                            SOCIALES
                        </li>
                        <li className='text-center'>
                            <IconButton color="secondary" >
                                <a href="https://www.instagram.com/crtindustriascreativas/">
                                    <InstagramIcon  />
                                </a>
                            </IconButton>
                            <IconButton color="secondary" >
                                <a href="https://www.linkedin.com/company/crtic/mycompany/">
                                    <LinkedInIcon  />
                                </a>
                            </IconButton>
                        </li>
                    </ul>
                    <ul className='col-12 col-md-4 list-unstyled'>
                        <li className='text-center'>
                            ¿Quiere escribirnos? 
                            <li>
                            <Link to={`/Contact`}>
                                ¡Contactenos en esta dirección!
                            </Link>
                            </li>
                        </li>
                    </ul>
                    <ul className='col-12 col-md-4 list-unstyled'>
                        <li className='text-center'>
                            <img className="img-fluid w-100 activities" src={logoCorfo} alt="Actividades" />
                        </li>
                    </ul>
                </nav>

            </div>
        </footer>
       </div>
       );
    }
 }