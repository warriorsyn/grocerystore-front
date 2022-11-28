import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import "../../Styles/App.css";
import Button from "react-bootstrap/Button";
import {api} from "../../Services/api";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function authenticate() {
        api.post('/auth', { email, password }).then(res => {
           if (res.data.token) {
               localStorage.setItem("@grocery:token", res.data.token);
               localStorage.setItem("@grocery:userid", res.data.id);
               navigate('/product')
           }
        }).catch(err => alert(err.data));
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className='cx login'>
                    <div className='input'>
                        <h1>Login</h1>

                        <input className="cad mt-2" type='email' placeholder='ex@ex.com.br' value={email} onChange={(txt) => setEmail(txt.target.value)} />

                        <input className="cad mt-2" type="password" placeholder='Senha' value={password} onChange={(txt) => setPassword(txt.target.value)} />
                    </div>
                    <Button onClick={() => authenticate()} >Entrar </Button>
                    <Button onClick={() => navigate(-1)}>Voltar</Button>
                </div>
            </header >
        </div >
    );
}
export default Login;
