import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";
import {api} from "../../Services/api";

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function register() {
        api.post('/user', { name, email, password, isAdmin: false }).then(res => {
            alert('Usuário criado com sucesso!');
            navigate('/');
        })
    }


    return (
        <div className="App">
            <header className="App-header">
                <form>
                    <div className='cx register'>
                        <h1>Cadastro</h1>
                        <div className='input'>
                            <input className="cad mt-2" type="text" placeholder="Nome" value={name}
                                   onChange={(txt) => setName(txt.target.value)} />
                            <input className="cad mt-2" type="email" placeholder="Email" value={email}
                                   onChange={(txt) => setEmail(txt.target.value)} />
                            <input className="cad mt-2" type="password" placeholder="Senha" value={password}
                                       onChange={(txt) => setPassword(txt.target.value)}
                                       />
                        </div>
                        <Button onClick={() => register() }>Cadastrar</Button>
                        <Button onClick={() => navigate("/")}>Voltar</Button>
                    </div>
                </form>
            </header >
        </div>
    );
}
export default Register;
