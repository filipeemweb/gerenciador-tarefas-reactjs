import React from 'react';
import moment from 'moment';

import imgNotDone from '../assets/icons/not-checked.svg';
import imgDone from '../assets/icons/checked.svg';

export const Item = props => {
  const { tarefa, selecionarTarefa } = props;
  const { dataConclusao, nome, dataPrevistaConclusao } = tarefa;

  const getDataText = (dtConclusao, dtPrevConclusao) => {
    if (!dtConclusao) {
      return `Previsão de conclusão em: ${moment(dtPrevConclusao).format('DD/MM/yyyy')}`;
    } else {
      return `Concluido em: ${moment(dtConclusao).format('DD/MM/yyyy')}`;
    }
  }

  return (
    <div id="container-item" className={dataConclusao ? "" : "ativo"} onClick={() => dataConclusao ? null : selecionarTarefa(tarefa)}>
      <img src={dataConclusao ? imgDone : imgNotDone} alt={dataConclusao ? 'tarefa concluída' : 'selecione a tarefa'} />
      <div>
        <p className={dataConclusao ? "concluido" : ""}>{nome}</p>
        <span>{getDataText(dataConclusao, dataPrevistaConclusao)}</span>
      </div>
    </div>
  );
}