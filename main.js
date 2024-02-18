let icons = {
  icondec1: "assets/decodificador_on.png",
  icondec2: "assets/decodificador_off.png",
  iconfoc1: "assets/jogodaforca_On.png",
  iconfoc2: "assets/jogodaforca_off.png",
  iconpt1: "assets/pt_on.png",
  iconpt2: "assets/pt_off.png",
  iconesp1: "assets/esp_on.png",
  iconesp2: "assets/esp_off.png",
};

function mudarImagem(elemento, imagemID, icon1, icon2) {
  let imagem = document.getElementById(imagemID);
  if (elemento.checked) {
    imagem.src = icons[icon1];
  } else {
    imagem.src = icons[icon2];
  }
}

let paragrafo = null;
let botao = null;
let div = null;

var textarea = document.getElementById("texto");

textarea.oninput = function () {
  this.style.height = "";
  this.style.height = this.scrollHeight + "px";
};

function criptografar() {
  let texto = document.getElementById("texto").value;
  let imagem_textos = document.getElementById("imagem_textos");
  let principal_secundario = document.getElementById("principal_secundario");
  let criptografia = texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  console.log(criptografia);
  if (imagem_textos) {
    imagem_textos.remove();
  }

  if (!div) {
    div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.padding = "32px";
    div.style.gap = "32px";
    principal_secundario.appendChild(div);
  }

  if (!paragrafo) {
    paragrafo = document.createElement("p");
    paragrafo.style.color = "#495057"; // Altera a cor do texto para vermelho
    paragrafo.style.fontSize = "24px"; // Altera o tamanho da fonte para 20px
    paragrafo.style.fontFamily = "Inter";
    paragrafo.style.fontWeight = "400";
    paragrafo.style.textShadow = "0px 2px 2px rgba(0, 0, 0, 0.25)";
    principal_secundario.appendChild(paragrafo);
  }

  paragrafo.innerText = criptografia;

  if (!botao) {
    botao = document.createElement("button");
    botao.innerText = "Copiar";
    botao.style.width = "328px";
    botao.style.height = "67px";
    botao.style.border = "2px #0a3871 solid";
    botao.style.borderRadius = "24px";
    botao.style.backgroundColor = "#d8dfe8";
    botao.style.color = "#0a3871";
    botao.style.fontFamily = "Inter";
    botao.style.cursor = "pointer";
    principal_secundario.appendChild(botao);
  }

  principal_secundario.appendChild(div);
  div.appendChild(paragrafo);
  div.appendChild(botao);
}

function descriptografar() {
  let imagem_textos = document.getElementById("imagem_textos");
  let principal_secundario = document.getElementById("principal_secundario");
  let texto = document.getElementById("texto").value;
  let descriptografia = texto
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  console.log(descriptografia);
  if (imagem_textos) {
    imagem_textos.remove();
  }

  if (!div) {
    div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.padding = "30%";
    div.style.gap = "32px";
    div.style.width = "32%";
    div.style.height = "72%";
    principal_secundario.appendChild(div);
  }

  if (!paragrafo) {
    paragrafo = document.createElement("p");
    paragrafo.style.color = "#495057"; // Altera a cor do texto para vermelho
    paragrafo.style.fontSize = "24px"; // Altera o tamanho da fonte para 20px
    paragrafo.style.fontFamily = "Inter";
    paragrafo.style.fontWeight = "400";
    paragrafo.style.textShadow = "0px 2px 2px rgba(0, 0, 0, 0.25)";
    principal_secundario.appendChild(paragrafo);
  }

  paragrafo.innerText = descriptografia;

  if (!botao) {
    botao = document.createElement("button");
    botao.innerText = "Copiar";
    botao.style.width = "328px";
    botao.style.height = "67px";
    botao.style.border = "2px #0a3871 solid";
    botao.style.borderRadius = "24px";
    botao.style.backgroundColor = "#d8dfe8";
    botao.style.color = "#0a3871";
    botao.style.fontFamily = "Inter";
    botao.style.cursor = "pointer";
    principal_secundario.appendChild(botao);
  }

  principal_secundario.appendChild(div);
  div.appendChild(paragrafo);
  div.appendChild(botao);
}