import React, {Fragment} from 'react';
import './Header.css';

const Header = (props) => {

    console.log(props.user)

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <span className="logo-1">R</span>
                    <span className="logo-2">E</span>
                    <span className="logo-3">A</span>
                </div>
                <nav>
                    <ul>
                        {props.user.logged &&
                            <li>Minha conta</li>
                        }
                        {props.user.logged === false &&
                            <Fragment>
                                <li>Login</li>
                                <li>Registrar</li>
                            </Fragment>
                        }

                        <li>Poste um anúncio</li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header;