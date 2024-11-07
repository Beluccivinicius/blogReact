import React, { ChangeEvent, useEffect, useState } from "react";
import headers from "../../utils/headers";
import { json, Link, useNavigate } from "react-router-dom";

function Cadastro() {
  const [usuario, setUsuario] = useState({
    id: 0,
    nome: "",
    mail: "",
    cpf: "",
    foto: "",
    nickname: "",
    cellPhone: "",
    senha: "",
  });

  const atualizarEstado = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    console.log(usuario);
  };

  const cadastrarNovoUsuario = () => {
    fetch("http://localhost:5050/cadastrar", {
      method: "Post",
      body: usuario,
      headers: headers,
    })
      .then((body) => body.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="bg-sky-600 p-16">
      <div className="items-center ml-72 mr-72 bg-slate-400 bg-opacity-20 p-20 rounded-3xl backdrop-blur-md">
        <form
          className="flex justify-center items-center flex-col  gap-10 form px-16"
          onSubmit={cadastrarNovoUsuario}
        >
          <div className="flex  gap-10">
            <Link to="/login">
              <h2 className=" text-5xl font-light login-titulo hover:text-sky-800 ">
                Login
              </h2>
            </Link>
            <span className="text-4xl font-light login-titulo">|</span>
            <Link to="/cadastro">
              <h2 className="   text-5xl   font-light login-titulo hover:text-sky-800 ">
                Cadastrar
              </h2>
            </Link>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-[#16171B] pb-4 ">
              Nome*
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#16171b] bg-transparent font-medium"
              value={usuario.nome}
              onChange={(e) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-[#16171B] pb-4 ">
              Email*
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#16171b] bg-transparent font-medium"
              value={usuario.email}
              onChange={(e) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-[#16171B] pb-4 ">
              CPF*
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="CPF"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#16171b] bg-transparent font-medium"
              value={usuario.cpf}
              onChange={(e) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-[#16171B] pb-4 ">
              Foto
            </label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#16171b] bg-transparent font-medium"
              value={usuario.foto}
              onChange={(e) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-[#16171B] pb-4 ">
              nickname
            </label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              placeholder="Nickname"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#16171b] bg-transparent font-medium"
              value={usuario.nickname}
              onChange={(e) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-[#16171B] pb-4 ">
              Celular*
            </label>
            <input
              type="tel"
              id="cellPhone"
              name="cellPhone"
              placeholder="celular"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#16171b] bg-transparent font-medium"
              value={usuario.celular}
              onChange={(e) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-[#16171B] pb-4 ">
              Senha*
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#16171b] bg-transparent font-medium"
              value={usuario.senha}
              onChange={(e) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-[#16171B] pb-4 ">
              Confirmar Senha*
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#16171b] bg-transparent font-medium"
              //   value={confirmaSenha}
              //   onChange={(e: ChangeEvent<HTMLInputElement>) =>
              //     handleConfirmarSenha(e)
              //   }
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button
              className="rounded-xl color-button   bg-[#FB7F01] hover:bg-[#E03401]  w-1/2 py-4 flex justify-center font-normal text-xl text-[#FFFFFF]"
              //   o`nClick={back}
            >
              Cancelar
            </button>
            <button
              className="rounded-xl color-button    bg-[#365314]  hover:bg-[#538d22]   w-1/2 py-4 flex justify-center font-normal text-xl text-[#FFFFFF]"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
