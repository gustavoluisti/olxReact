import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

class Home extends React.Component{
    render() {
        return(
            <div>
                <h1>Home</h1>

                <Link to="/sobre">Ir para a página Sobre</Link>
            </div>
        )
    }
}

export default Home;