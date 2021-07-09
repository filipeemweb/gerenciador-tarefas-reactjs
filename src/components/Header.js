import React from 'react';
import logo from '../assets/icons/devaria-logo.svg';
import sairMob from '../assets/icons/exit-mobile.svg';
import sairDesk from '../assets/icons/exit-desktop.svg';

export const Header = props => {

  const { showModal } = props;

  const nomeCompleto = localStorage.getItem('usuarioNome');
  const primeiroNome = nomeCompleto?.split(' ')[0] || 'User';

  return (
    <div className="container-header">
      <img className="logo" src={logo} alt="Logo Devaria" />
      <button onClick={showModal}><span>+</span>Adicionar tarefa</button>
      <div className="mobile">
        <span>Olá, {primeiroNome}</span>
        <img className="sair" src={sairMob} alt="Deslogar" onClick={props.sair} />
      </div>
      <div className="desktop">
        <span>Olá, {primeiroNome}</span>
        <img className="sair" src={sairDesk} alt="Deslogar" onClick={props.sair} />
      </div>
    </div>
  )
}