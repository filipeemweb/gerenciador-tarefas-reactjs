import React from 'react';

import { Item } from './Item';

import imgEmpty from '../assets/icons/empty-list.svg';

export const Listagem = (props) => {
  const { tarefas } = props;

  return (
    <div id="container-listagem" className={tarefas && tarefas.length > 0 ? "" : "vazia"}>
      {tarefas && tarefas.length > 0 ?
        (
          tarefas.map((tarefa) => <Item key={tarefa.id} tarefa={tarefa} />)
        )
        :
        (
          <>
            <img src={imgEmpty} alt="Nenhuma atividade encontrada" />
            <p>Você ainda não possui tarefas cadastradas!</p>
          </>
        )}
    </div>
  )
}