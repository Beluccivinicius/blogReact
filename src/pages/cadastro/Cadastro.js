import React, { ChangeEvent, useEffect, useState } from "react";
import headers from "../../utils/headers";
import { json, Link, useNavigate } from "react-router-dom";
import DialogoCadastro from "../../components/dialogoCadastro/DialogoCadastro.js";
import validateCpf from "../../utils/validateCpf.js";
import Alert from "@mui/material/Alert";

// fetch do formulario cadastro
// fetch("http://localhost:5050/cadastrar", {
//   method: "POST",
//   body: usuarioJson,
//   headers: headers,
// })
//   .then((body) => body.json())
//   .then((data) => {
//     console.log(data);
//   });

function Cadastro() {
  // const navigate = useNavigate();

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
  const [open, setOpen] = useState(false);
  const [tudoCerto, setTudoCerto] = useState();

  const atualizarEstado = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const cadastrarNovoUsuario = (e) => {
    let usuarioJson = JSON.stringify(usuario);

    e.preventDefault();
    let cpfValido = validateCpf(usuario.cpf);

    const regexTelefone = /^(?:\+55\s?)?(?:\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/;
    let telefoneValido = regexTelefone.test(usuario.cellPhone);

    if (telefoneValido && cpfValido) {
      setTudoCerto(<DialogoCadastro onClick={true} />);
    } else {
      setTudoCerto(
        <Alert variant="filled" severity="error">
          CPF não é válido
        </Alert>
      );
    }
  };

  return (
    <div className="bg-sky-600 p-16">
      <div className="items-center ml-72 mr-72 bg-slate-400 bg-opacity-20 p-20 rounded-3xl backdrop-blur-md">
        <form className="flex justify-center items-center flex-col  gap-10 form px-16">
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
              value={usuario.mail}
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
          {tudoCerto}
          <div className="flex justify-around w-full gap-8">
            <button
              className="rounded-xl color-button   bg-[#FB7F01] hover:bg-[#E03401]  w-1/2 py-4 flex justify-center font-normal text-xl text-[#FFFFFF]"
              // onClick={back}
            >
              Cancelar
            </button>
            <button
              className="rounded-xl color-button    bg-[#365314]  hover:bg-[#538d22]   w-1/2 py-4 flex justify-center font-normal text-xl text-[#FFFFFF]"
              type="submit"
              onClick={(e) => cadastrarNovoUsuario(e)}
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
