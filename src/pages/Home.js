import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OlxAPI from '../helpers/OlxApi';

import './Home.css'

const Home = () => {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);


    OlxAPI.getProducts()
        .then((p) => {
            setProdutos(p);
            setLoading(false);
        })
    return (
        <div>
            <h1>Home</h1>

            <hr />
            {loading &&
                <div>Carregando...</div>
            }

            {produtos.length > 0 &&
                <ul>
                    {produtos.map((produto, index) => (
                        <li key={index}>{produto.title}</li>
                    ))}
                </ul>
            }
            
            <hr />

            <Link to="/sobre">Ir para a página Sobre</Link>
        </div>
    )
}


export default Home;