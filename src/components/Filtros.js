import React, { useState } from 'react';

import imgFilter from '../assets/icons/filter.svg';

export const Filtros = () => {

  const [showFiltros, setShowFiltros] = useState(false);

  return (
    <div id="container-filtros">
      <div className="title">
        <span>Tarefas</span>
        <img src={imgFilter} alt="Filtrar tarefas" onClick={() => setShowFiltros(!showFiltros)} />
        <div className="form">
          <div>
            <label>Data prevista de conclusão de:</label>
            <input type="date" />
          </div>
          <div>
            <label>até:</label>
            <input type="date" />
          </div>
          <div className="line"></div>
          <div>
            <label>status:</label>
            <select>
              <option value={0} select>Todos</option>
              <option value={1}>Ativas</option>
              <option value={2}>Concluídas</option>
            </select>
          </div>
        </div>
      </div>
      {showFiltros && (
        <div className="filtros-mobile">
          <div>
            <label>Período de:</label>
            <input type="date" />
          </div>
          <div>
            <label>Período até:</label>
            <input type="date" />
          </div>
          <div className="line"></div>
          <div>
            <label>status:</label>
            <select>
              <option value={0} select>Todos</option>
              <option value={1}>Ativas</option>
              <option value={2}>Concluídas</option>
            </select>
          </div>
        </div>
      )}
    </div>

  );
}