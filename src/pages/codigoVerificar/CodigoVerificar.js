import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Changercookies from "../../utils/getValuesCookies";
import { useNavigate } from "react-router-dom";

function CodigoVerificar() {
  const allPins = Array.from(document.getElementsByClassName("pin"));

  const navigate = useNavigate();

  const [pin, setPin] = useState({ n1: "", n2: "", n3: "", n4: "", n5: "" });

  const [time, setTime] = useState(59);

  const [senhaExpirou, setSenhaExpirou] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (time <= 9 || time == 9) {
        setTime(`0${time - 1}`);
        return;
      }
      setTime(time - 1);
    }, 1000);
  });

  const atualizaEstado = (value, index) => {
    setPin({ ...pin, [index]: value });
  };

  const keyDown = (event) => {
    let id = event.target.id;
    let [n, index] = id.split("");

    const value = event.target.value.length;

    if (event.keyCode === 8 || event.charCode === 8) {
      if (value === 0) {
        let beforeIndex = parseInt(index) - 1;
        const previousPin = document.getElementById(`n${beforeIndex}`);

        setPin({ ...pin, [id]: "" });
        if (previousPin) previousPin.focus();
      }
    }

    if (value >= 1 && event.keyCode != 8) {
      let nextIndex = parseInt(index) + 1;
      const nextPin = document.getElementById(`n${nextIndex}`);

      setPin({ ...pin, [id]: event.target.value });
      if (nextPin) {
        nextPin.focus();
        return;
      }
    }
  };

  const fetchVerificacao = async (e) => {
    e.preventDefault();

    let resultInputs = Object.values(pin).join("");

    if (resultInputs.length < 5) {
      let theLastPin = document.getElementById("n5");
      setPin({ ...pin, ["n5"]: theLastPin.value });
      resultInputs = Object.values(pin).join("");
    }

    const hashPass = Changercookies.takeValue("pass", document.cookie);

    let postJson = JSON.stringify({
      resultInputs,
      hashPass,
    });

    let date = Date.now();

    let dateExpires = Changercookies.takeValue("expires", document.cookie);

    if (date - dateExpires > 7000) {
      setSenhaExpirou(true);
      return;
    }

    await fetch("http://localhost:5050/cadastrar/verifyToken", {
      method: "POST",
      body: postJson,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        navigate("/Home");
      });
  };

  return (
    <div className="flex flex-col	items-center ">
      <h1 className="text-5xl	text-center pt-20">Código de verificação</h1>
      <div className="m-auto border-4 border-[#D9D9D9] mt-6 rounded-3xl h-96 w-9/12 h-auto p-8">
        <p className="text-center">
          Um código de 5 dígitos foi enviado para o e-mail 123@gmail.com, digite
          abaixo
        </p>
        <div className="w-36 rounded-3xl border border-[#1C2CC1] m-auto mt-6 flex justify-center">
          {time > 0 ? (
            <p className="text-center text-black">0:{time}</p>
          ) : (
            <button className="w-28 text-center hover:text-[#1C2CC1]">
              reenviar código
            </button>
          )}
        </div>
        <div className="flex items-center m-auto gap-5 mt-9 justify-center">
          <input
            id="n1"
            maxlength="1"
            type="text"
            className="w-20 min-h-20 text-center outline-none border border-[#ddd] rounded-3xl text-black mr-1 bg-[#D9D9D9] text-3xl"
            tabIndex="1"
            onClick={(e) => atualizaEstado(e.target.value, e.target.id)}
            onKeyUp={(e) => keyDown(e)}
          />
          <input
            id="n2"
            maxlength="1"
            type="text"
            className="w-20 min-h-20 text-center outline-none border border-[#ddd] rounded-3xl text-black mr-1 bg-[#D9D9D9] text-3xl"
            tabIndex="2"
            onClick={(e) => atualizaEstado(e.target.value, e.target.id)}
            onKeyUp={(e) => keyDown(e)}
          />
          <input
            id="n3"
            maxlength="1"
            type="text"
            className="w-20 min-h-20 text-center outline-none border border-[#ddd] rounded-3xl text-black mr-1 bg-[#D9D9D9] text-3xl"
            tabIndex="3"
            onClick={(e) => atualizaEstado(e.target.value, e.target.id)}
            onKeyUp={(e) => keyDown(e)}
          />
          <input
            id="n4"
            maxlength="1"
            type="text"
            className="w-20 min-h-20 text-center outline-none border border-[#ddd] rounded-3xl text-black mr-1 bg-[#D9D9D9] text-3xl"
            tabIndex="4"
            onClick={(e) => atualizaEstado(e.target.value, e.target.id)}
            onKeyUp={(e) => keyDown(e)}
          />
          <input
            id="n5"
            maxlength="1"
            type="text"
            className="w-20 min-h-20 text-center outline-none border border-[#ddd] rounded-3xl text-black mr-1 bg-[#D9D9D9] text-3xl"
            tabIndex="5"
            onClick={(e) => atualizaEstado(e.target.value, e.target.id)}
            onKeyUp={(e) => keyDown(e)}
          />
        </div>
        {senhaExpirou && (
          <p className="flex justify-center mt-3 text-red-500">
            Sua senha expirou, reenvie o código
          </p>
        )}
        <div className="flex justify-center mt-12">
          <button
            className="p-5 rounded-3xl bg-[#4F5FF1] hover:scale-110 w-72 text-[#ddd]"
            onClick={(e) => fetchVerificacao(e)}
          >
            ENVIAR CÓDIGO
          </button>
        </div>
      </div>
    </div>
  );
}

export default CodigoVerificar;
