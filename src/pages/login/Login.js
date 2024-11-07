import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
// import connectingPeople from "../../public/conectingPeople.png";

export default function Login() {
  return (
    <div className="bg-sky-600 p-16">
      <div className="items-center ml-72 mr-72 bg-slate-400 bg-opacity-20 p-20 rounded-3xl backdrop-blur-md">
        <form
          className="flex justify-center items-center flex-col  gap-10 form px-16 "
          // onSubmit={login}
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
          <div className="flex flex-col w-full ">
            <label htmlFor="email" className="text-[#16171B] pb-4 ">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
              // value={usuarioLogin.email}
              // onChange={(e: ChangeEvent<HTMLInputElement>) =>
              //   atualizarEstado(e)
              // }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-[#16171B] pb-4 ">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
              // value={usuarioLogin.senha}
              // onChange={(e: ChangeEvent<HTMLInputElement>) =>
              //   atualizarEstado(e)
              // }
            />
          </div>
          <button
            type="submit"
            className="rounded-xl color-button   bg-[#FB7F01]  w-1/4 py-4 flex justify-center font-normal text-xl text-[#FFFFFF]"
          >
            {/* {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5" //icone de carregamento
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Entrar</span>
              )} */}
          </button>
          <hr className="border-slate-800 w-full" />
          <p className="text-[#16171B] font-medium">
            Ainda não tem uma conta?{" "}
            <Link to="/cadastro" className=" hover:text-[#023e8a]  underline">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
