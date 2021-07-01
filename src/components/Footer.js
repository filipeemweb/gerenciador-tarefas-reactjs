import React from 'react';

import imgAdd from '../assets/icons/add.svg';

export const Footer = () => {
  return (
    <div id="container-footer">
      <button><img src={imgAdd} alt="Adicionar tarefa" />Adicionar tarefa</button>
      <span>&copy; Copyright {new Date().getFullYear()} Devaria - Todos os diteitos reservados</span>
    </div>
  );
}