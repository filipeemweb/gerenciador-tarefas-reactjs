import React, { useState } from 'react';

import { Input } from '../components/Input';

import logo from '../assets/icons/devaria-logo.svg';
import mail from '../assets/icons/mail.svg';
import lock from '../assets/icons/lock.svg';


export const Login = () => {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setLoading] = useState(false);

  const executaLogin = evento => {
    evento.preventDefault();
    setLoading(true);
    console.log('login', login);
    console.log('senha', senha);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <div className="container-login">
      <img
        src={logo}
        alt="Logo Devaria"
        className="logo"
      />
      <form>
        <Input
          srcImg={mail}
          altImg={"Ícone email"}
          inputType="text"
          inputName="login"
          inputPlaceholder="Informe seu email"
          value={login}
          setValue={setLogin}
        />
        <Input
          srcImg={lock}
          altImg={"Ícone senha"}
          inputType="password"
          inputName="senha"
          inputPlaceholder="Informe sua senha"
          value={senha}
          setValue={setSenha}
        />

        <button onClick={executaLogin} disabled={isLoading}>{isLoading ? '...loading' : 'Login'}</button>
      </form>
    </div>
  );
}