import React, { useState } from "react";
import moment from "moment";
import { Modal } from "react-bootstrap";

import { Item } from "./Item";

import imgEmpty from "../assets/icons/empty-list.svg";
import { executaRequisicao } from "../services/api";

export const Listagem = (props) => {
  const { tarefas, getTarefas } = props;

  const [showModal, setShowModal] = useState(false);

  const [nomeTarefa, setNomeTarefa] = useState("");
  const [idTarefa, setIdTarefa] = useState(null);
  const [dataPrevistaConclusao, setDataPrevistaConclusao] = useState("");
  const [dataConclusao, setDataConclusao] = useState("");
  const [erro, setErro] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const atualizarTarefa = async () => {
    try {
      if (!nomeTarefa || !dataPrevistaConclusao) {
        setErro("Favor informar nome e data de previsão");
        return;
      }

      const body = {
        nome: nomeTarefa,
        dataPrevistaConclusao,
        dataConclusao,
      };

      await executaRequisicao("tarefa/" + idTarefa, "put", body);
      await getTarefas();
      setNomeTarefa("");
      setIdTarefa("");
      setDataPrevistaConclusao("");
      setDataConclusao("");
      toggleModal();
      setErro("");
    } catch (e) {
      console.log(e);
      if (e?.response?.data?.erro) {
        setErro(e.response.data.erro);
      } else {
        setErro("Não foi possível salvar a tarefa, fale com o administrador!");
      }
    }
  };

  const excluirTarefa = async () => {
    try {
      if (!idTarefa) {
        setErro("Favor informar a tarefa a ser excluida");
        return;
      }

      await executaRequisicao("tarefa/" + idTarefa, "delete");
      await getTarefas();
      setNomeTarefa("");
      setIdTarefa("");
      setDataPrevistaConclusao("");
      setDataConclusao("");
      toggleModal();
      setErro("");
    } catch (e) {
      console.log(e);
      if (e?.response?.data?.erro) {
        setErro(e.response.data.erro);
      } else {
        setErro("Não foi possível salvar a tarefa, fale com o administrador!");
      }
    }
  };

  const selecionarTarefa = (tarefa) => {
    setErro("");
    setIdTarefa(tarefa.id);
    setNomeTarefa(tarefa.nome);
    setDataPrevistaConclusao(
      moment(tarefa.dataPrevistaConclusao).format("yyyy-MM-DD")
    );
    setDataConclusao(tarefa.dataConclusao);
    toggleModal();
  };

  return (
    <>
      <div
        id="container-listagem"
        className={tarefas && tarefas.length > 0 ? "" : "vazia"}
      >
        {tarefas && tarefas.length > 0 ? (
          tarefas.map((tarefa) => (
            <Item
              key={tarefa.id}
              tarefa={tarefa}
              selecionarTarefa={selecionarTarefa}
            />
          ))
        ) : (
          <>
            <img src={imgEmpty} alt="Nenhuma atividade encontrada" />
            <p>Você ainda não possui tarefas cadastradas!</p>
          </>
        )}
      </div>
      <Modal show={showModal} onHide={toggleModal} id="container-modal">
        <Modal.Body>
          <p>Alterar uma tarefas</p>
          {erro && <p className="error">{erro}</p>}
          <input
            type="text"
            name="nome"
            placeholder="Nome da tarefa"
            className="col-12"
            value={nomeTarefa}
            onChange={(event) => setNomeTarefa(event.target.value)}
          />
          <input
            type="text"
            name="dataPrevisao"
            placeholder="Data de previsão de conclusão"
            className="col-12"
            value={dataPrevistaConclusao}
            onChange={(event) => setDataPrevistaConclusao(event.target.value)}
            onFocus={(event) => (event.target.type = "date")}
            onBlur={(event) =>
              dataPrevistaConclusao
                ? (event.target.type = "date")
                : (event.target.type = "text")
            }
          />
          <input
            type="text"
            name="dataConclusao"
            placeholder="Data de conclusão"
            className="col-12"
            value={dataConclusao ? dataConclusao : ""}
            onChange={(event) => setDataConclusao(event.target.value)}
            onFocus={(event) => (event.target.type = "date")}
            onBlur={(event) =>
              dataConclusao
                ? (event.target.type = "date")
                : (event.target.type = "text")
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <div className="buttons col-12">
            <button onClick={atualizarTarefa}>Alterar</button>
            <span
              onClick={() => {
                excluirTarefa();
                toggleModal();
              }}
            >
              Excluir tarefa
            </span>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
