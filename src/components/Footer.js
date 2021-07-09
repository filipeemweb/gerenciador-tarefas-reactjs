import React from 'react';

import imgAdd from '../assets/icons/add.svg';

export const Footer = (props) => {
  const { showModal } = props;

  return (
    <div id="container-footer">
      <button onClick={showModal}><img src={imgAdd} alt="Adicionar tarefa" />Adicionar tarefa</button>
      <span>&copy; Copyright {new Date().getFullYear()} Devaria - Todos os diteitos reservados</span>
    </div>
  );
}