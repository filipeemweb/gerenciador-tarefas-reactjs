import React, { useState } from "react";

import imgFilter from "../assets/icons/filter.svg";

export const Filtros = (props) => {
  const {
    periodoDe,
    setPeriodoDe,
    periodoAte,
    setPeriodoAte,
    status,
    setStatus,
  } = props;

  const [showFiltros, setShowFiltros] = useState(false);

  return (
    <div id="container-filtros">
      <div className="title">
        <span>Tarefas</span>
        <img
          src={imgFilter}
          alt="Filtrar tarefas"
          onClick={() => setShowFiltros(!showFiltros)}
        />
        <div className="form">
          <div>
            <label>Data prevista de conclusão de:</label>
            <input
              type="date"
              value={periodoDe}
              onChange={(event) => setPeriodoDe(event.target.value)}
            />
          </div>
          <div>
            <label>até:</label>
            <input
              type="date"
              value={periodoAte}
              onChange={(event) => setPeriodoAte(event.target.value)}
            />
          </div>
          <div className="line"></div>
          <div>
            <label>status:</label>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}>
              <option value={0}>Todos</option>
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
            <input
              type="date"
              value={periodoDe}
              onChange={(event) => setPeriodoDe(event.target.value)}
            />
          </div>
          <div>
            <label>Período até:</label>
            <input
              type="date"
              value={periodoAte}
              onChange={(event) => setPeriodoAte(event.target.value)}
            />
          </div>
          <div className="line"></div>
          <div>
            <label>status:</label>
            <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}>
              <option value={0}>Todos</option>
              <option value={1}>Ativas</option>
              <option value={2}>Concluídas</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
