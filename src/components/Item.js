import React from 'react';
import moment from 'moment';

import imgNotDone from '../assets/icons/not-checked.svg';
import imgDone from '../assets/icons/checked.svg';

export const Item = props => {
  const { tarefa } = props;

  return (
    <div id="container-item">
      <img src={imgNotDone} alt="Selecionar tarefa" />
      <div>
        <p>{tarefa?.nome}</p>
        <span>Previsão de conclusão em: {moment(tarefa?.dataPrevisaoConclusao).format('DD/MM/yyyy')}</span>
      </div>
    </div>
  );
}