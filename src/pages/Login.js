import React, { useState } from 'react';

import { Input } from '../components/Input';

import logo from '../assets/icons/devaria-logo.svg';
import mail from '../assets/icons/mail.svg';
import lock from '../assets/icons/lock.svg';
import { executaRequisicao } from '../services/api';


export const Login = (props) => {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [msgErro, setMsgErro] = useState('');
  const [isLoading, setLoading] = useState(false);

  const executaLogin = async evento => {
    try {
      evento.preventDefault();
      setLoading(true);

      const body = {
        login,
        senha
      }

      const resultado = await executaRequisicao('login', 'post', body)

      if (resultado?.data?.token) {
        localStorage.setItem('accessToken', resultado.data.token);
        localStorage.setItem('usuarioNome', resultado.data.nome);
        localStorage.setItem('usuarioEmail', resultado.data.email);
        props.setAccessToken(resultado.data.token);
      }

    } catch (e) {
      if (e?.response?.data?.erro) {
        setMsgErro(e.response.data.erro)
      } else {
        setMsgErro('Não foi possível efetuar o login, fale com o administrador!')
      }
      console.log(e);
    }
  }

  return (
    <div className="container-login">
      <img
        src={logo}
        alt="Logo Devaria"
        className="logo"
      />
      <form>
        <p>{msgErro}</p>
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