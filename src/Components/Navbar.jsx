import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, Link} from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="https://www.google.com/maps/@-10.971435,-37.0869432,3a,75y,156.54h,77.22t/data=!3m6!1e1!3m4!1s9s01dveSl_MCFIUBckUqCg!2e0!7i16384!8i8192"
            >Mercearia Itabaiana</a>
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
