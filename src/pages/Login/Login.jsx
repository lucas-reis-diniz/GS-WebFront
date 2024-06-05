import React, { useState } from 'react';
import './Login.scss';
import Header from '../../components/Header/Header';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Evitar o recarregamento da página após o envio do formulário

        try {
            const response = await fetch('/user.json'); // Lê o arquivo JSON local
            if (!response.ok) {
                throw new Error('Falha ao carregar o arquivo de usuário');
            }

            const userData = await response.json();
            if (username === userData.username && password === userData.password) {
                console.log('Login bem-sucedido');
                // Você pode redirecionar para outra página ou fazer algo aqui após o login bem-sucedido
            } else {
                setErrorMessage('Nome de usuário ou senha incorretos');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setErrorMessage('Erro ao fazer login. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <main>
            <div className="main-container">
                <Header />
                <form onSubmit={handleLogin} className="login-form">
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </form>
            </div>
        </main>
    );
}

export default Login;
