import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Filtros } from '../components/Filtros';
import { Listagem } from '../components/Listagem';
import { Footer } from '../components/Footer';

export const Home = (props) => {

  const [tarefas, setTarefas] = useState([
    {
      id: '12ed1e23',
      nome: 'Tarefa Mock 1', 
      dataPrevisaoConclusao: "2021-07-03",
      dataConclusao: "null"
    },
    {
      id: '2sa1f3a7j3',
      nome: 'Tarefa Mock 2', 
      dataPrevisaoConclusao: "2021-06-31",
      dataConclusao: "2021-06-30"
    },
  ])

  const sair = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('usuarioNome');
    localStorage.removeItem('usuarioEmail');
    props.setAccessToken('');
  }

  return (
    <>
      <Header sair={sair} />
      <Filtros />
      <Listagem  tarefas={tarefas}/>
      <Footer />
    </>
  );
}
