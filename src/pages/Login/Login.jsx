import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { auth, provider } from './configGoogle';
import { signInWithPopup } from 'firebase/auth';
import googleBtn from '../../assets/web_neutral_rd_na@2x.png'
import './Login.scss';
import Baleia from '../../assets/baleia.svg';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Evitar o recarregamento da página após o envio do formulário

        try {
            const response = await fetch('http://localhost:3001/api/user'); // Lê o arquivo JSON da API interna
            if (!response.ok) {
                throw new Error('Falha ao carregar o arquivo de usuário');
            }

            const userData = await response.json();
            console.log('Dados do usuário carregados:', userData);

            if (username === userData.username && password === userData.password) {
                console.log('Login bem-sucedido');
                // Salvar dados do usuário na sessão
                localStorage.setItem('user', JSON.stringify(userData));
                navigate('/Data'); 
            } else {
                setErrorMessage('Nome de usuário ou senha incorretos');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setErrorMessage('Erro ao fazer login. Por favor, tente novamente mais tarde.');
        }
    };

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log('Usuário logado com sucesso:', user);
                // Salvar dados do usuário na sessão
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/Data');
            })
            .catch((error) => {
                console.error('Erro ao fazer login com o Google:', error);
                setErrorMessage('Erro ao fazer login com o Google. Por favor, tente novamente mais tarde.');
            });
    };

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/Data');
        }
    }, [navigate]);

    return (
        <main>
            <div className="main-container-login">
                <div className='left-container'>
                    <div className='left-container-title'>
                        <h1>OCEANS</h1>
                        <h2>WATCH</h2>
                    </div>
                    <img src={Baleia} alt="img-baleia" className='img-baleia-login'/>
                </div>
                <div className='right-container'>
                    <div className='right-container-title'>
                        <h2>LOGIN</h2>
                        <p>Entre agora para conferir os novos dados sobre o oceano!</p>
                    </div>
                    <form onSubmit={handleLogin} className="login-form">
                        <input
                            type="text"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className='login-btn'>Entrar</button>
                        <img src={googleBtn} alt="" className="google-btn" onClick={handleClick}/>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Login;
