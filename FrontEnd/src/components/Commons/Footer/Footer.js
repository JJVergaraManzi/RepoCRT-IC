import React, {Component} from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';



 
 export default class Footer extends Component {
    render() {
       return (
        <div>
        <footer className = "text-white py-4  bg-dark">
            <div className='container'>
                <nav className='row'>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='text-center'>
                            SÍGUENOS EN REDES 
                            SOCIALES
                            <IconButton color="secondary" >
                                <a href="https://www.instagram.com/crtindustriascreativas/">
                                    <InstagramIcon  />
                                </a>
                            </IconButton>
                        </li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li >
                            ¿Quiere escribirnos? 
                            <a href="https://www.instagram.com/crtindustriascreativas/">
                            <Link to={`/Contact`}>
                                ¡Contactenos!
                            </Link>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </footer>
       </div>
       );
    }
 }