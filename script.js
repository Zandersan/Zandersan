(function () {

  const senhaChamada = document.querySelector(".senha-chamada");
  const caixaChamada = document.querySelector(".caixa-chamada");

  const botaoComum = document.querySelector(".botaoclientec");
  const botaoRapido = document.querySelector(".botaoclienter");
  const botaoPrioritario = document.querySelector(".botaoclientep");
  const senhaCliente = document.querySelector(".senha-cliente");

  const botaoCaixa1 = document.querySelector(".botaocaixa1");
  const botaoCaixa2 = document.querySelector(".botaocaixa2");
  const botaoCaixa3 = document.querySelector(".botaocaixa3");
  const botaoCaixa4 = document.querySelector(".botaocaixa4");

  const filaComum = [];
  const filaRapido = [];
  const filaPrioritario = [];

  let fila = 0;

  function adicionarFila(event) {
    if (event.target.innerText === "Comum") {
      filaComum.push(`C-${filaComum.length + 1}`)
      senhaCliente.innerText = `C-${filaComum.length}`;
      console.log(filaComum);
    } else if (event.target.innerText === "Prioritário") {
      filaPrioritario.push(`P-${filaPrioritario.length + 1}`)
      senhaCliente.innerText = `P-${filaPrioritario.length}`;
      console.log(filaPrioritario);
    } else if (event.target.innerText === "Rápido") {
      filaRapido.push(`R-${filaRapido.length + 1}`)
      senhaCliente.innerText = `R-${filaRapido.length}`;
      console.log(filaRapido);
    }
  }

  // function sairFila(event) {
  //   if (event.target.innerText === "Caixa 1") {
  //     const clienteChamado = filaComum.shift();
  //     senhaChamada.innerText = clienteChamado;
  //     caixaChamada.innerText = "Caixa 1";
  //   }
  //   console.log(filaComum);

  function sairFila(event) {
    if (event.target.innerText === "Caixa 1") {
      if (filaPrioritario.length > 0) {
        senhaChamada.innerText = filaPrioritario.shift();
      } else if (filaRapido.length > 0) {
        senhaChamada.innerText = filaRapido.shift();
      } else if (filaComum.length > 0) {
        senhaChamada.innerText = filaComum.shift();
      }
      caixaChamada.innerText = "Caixa 1";
      console.log(filaPrioritario);
      console.log(filaComum);
      console.log(filaRapido);
    }
    if (event.target.innerText === "Caixa 2") {
      if (filaRapido.length > 0) {
        senhaChamada.innerText = filaRapido.shift();
      } else if (filaPrioritario.length > 0) {
        senhaChamada.innerText = filaPrioritario.shift();
      } else if (filaComum.length > 0) {
        senhaChamada.innerText = filaComum.shift();
      }
      caixaChamada.innerText = "Caixa 2";
      console.log(filaPrioritario);
      console.log(filaComum);
      console.log(filaRapido);
    }
    if (event.target.innerText === "Caixa 3") {
      if (filaRapido.length > 0) {
        senhaChamada.innerText = filaRapido.shift();
      } else if (filaPrioritario.length > 0) {
        senhaChamada.innerText = filaPrioritario.shift();
      } else if (filaComum.length > 0) {
        senhaChamada.innerText = filaComum.shift();
      }
      caixaChamada.innerText = "Caixa 3";
      console.log(filaPrioritario);
      console.log(filaComum);
      console.log(filaRapido);
    }
    if (event.target.innerText === "Caixa 4") {
      if (filaComum.length > 0) {
        senhaChamada.innerText = filaComum.shift();
      } else if (filaPrioritario.length > 0) {
        senhaChamada.innerText = filaPrioritario.shift();
      } else if (filaRapido.length > 0) {
        senhaChamada.innerText = filaRapido.shift();
      }
      caixaChamada.innerText = "Caixa 4";
      console.log(filaPrioritario);
      console.log(filaComum);
      console.log(filaRapido);
    }
  }

  botaoComum.addEventListener("click", adicionarFila, false);

  botaoCaixa1.addEventListener("click", sairFila, false);

  botaoRapido.addEventListener("click", adicionarFila, false);

  botaoPrioritario.addEventListener("click", adicionarFila, false);

  botaoCaixa2.addEventListener("click", sairFila, false);

  botaoCaixa3.addEventListener("click", sairFila, false);

  botaoCaixa4.addEventListener("click", sairFila, false);

})();