import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import menuButton from '../../assets/burger.png'

const Header = (props) => {

    const [menuOpened, setMenuOpened] = useState(false)

    const menuToggle = () => {
        setMenuOpened(!menuOpened)
    };

    console.log(props.user)

    return (
        <header>
            <div className="container">
                <div className="menu--opener" onClick={menuToggle}>
                    <img src={menuButton} />
                </div>

                <div className="logo">
                    <span className="logo-1">VENDA</span>
                    <span className="logo-2">A</span>
                    <span className="logo-3">E</span>
                </div>
                <nav className={menuOpened ? 'opened' : ''}>
                    <ul>
                        {props.user.logged &&
                            <li>
                                <Link to="/minha-conta">Minha Conta</Link>
                            </li>
                        }
                        {props.user.logged === false &&
                            <Fragment>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/registrar">Registrar</Link>
                                </li>
                            </Fragment>
                        }

                        <li>
                           <Link className="link--button" to="/poste-um-anuncio">Poste um anúncio</Link> 
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header;