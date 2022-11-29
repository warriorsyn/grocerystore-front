import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, Link} from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand">Mercearia Itabaiana</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to={"/product"} class="nav-link">Produtos</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"/order"} class="nav-link">Reservas</Link>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default NavBar;
