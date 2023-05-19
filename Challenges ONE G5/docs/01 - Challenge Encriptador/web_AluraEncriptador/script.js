const inputArea = document.querySelector('.text-input');
const outputArea = document.querySelector('.text-mensaje');

// Botones Encriptar | Desencriptar

function btnEncriptar() {
  const textEncriptado = encriptar(inputArea.value);
  outputArea.value = textEncriptado;
  inputArea.value = "";
}

function encriptar(string) {
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  string = string.toLowerCase();
  for(let i=0; i<matrizCodigo.length; i++){
    if(string.includes(matrizCodigo[i][0])){
      string = string.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return string;  
}

function btnDesencriptar() {
  const textDesencriptado = desencriptar(inputArea.value);
  outputArea.value = textDesencriptado;
  inputArea.value = "";
}

function desencriptar(string) {
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  string = string.toLowerCase();
  for(let i=0; i<matrizCodigo.length; i++){
    if(string.includes(matrizCodigo[i][1])){
      string = string.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return string;  
}

// Color texto mensaje

function colorEncriptado() {
  // cambia el color del texto dentro de .text-mensaje
  outputArea.classList.add('encriptado');
  outputArea.classList.remove('desencriptado');
  // cambia el color del boton copiar
  const btnCopiar = document.getElementById('btn-copiar');
  btnCopiar.classList.add('encriptado');
  btnCopiar.classList.remove('desencriptado');
}

function colorDesencriptado() {
  // cambia el color del texto dentro de .text-mensaje
  outputArea.classList.add('desencriptado');
  outputArea.classList.remove('encriptado');
  // cambia el color de .btn-copiar
  const btnCopiar = document.getElementById('btn-copiar');
  btnCopiar.classList.add('desencriptado');
  btnCopiar.classList.remove('encriptado');
}

// Boton Copiar y Mostrar | Ocultar informacion

function mostrarBtnCopiar() { // Funcion que muestra el boton Copiar y oculta el contenido informativo
  const btnCopiar = document.getElementById('btn-copiar');
  btnCopiar.classList.add('visible');
  const info = document.getElementById('info-mensaje');
  info.classList.add('oculto');
  const img = document.getElementById('fondo-mensaje');
  img.classList.add('oculto');
}

function ocultarBtnCopiar() { // Funcion que oculta el boton Copiar y muestra el contenido informativo
  const btnCopiar = document.getElementById('btn-copiar');
  btnCopiar.classList.remove('visible');
  const info = document.getElementById('info-mensaje');
  info.classList.remove('oculto');
  const img = document.getElementById('fondo-mensaje');
  img.classList.remove('oculto');
}

function btnCopiar() {
  let textcopy = outputArea.select();
  document.execCommand('copy');
  outputArea.value = "";
}

// Si la pantalla es 768px o menos

if (window.matchMedia('(max-width: 768px)').matches) {  
  const textarea = document.querySelector('.text-input'); 
  textarea.addEventListener('input', () => { // Escalabilidad vertical por cada salto de línea para text-input
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  });

  function btnEncriptar() {
    const textEncriptado = encriptar(inputArea.value);
    outputArea.value = textEncriptado;
    inputArea.value = "";
    ajustarAltura(outputArea);
  }
  
  function btnDesencriptar() {
    const textDesencriptado = desencriptar(inputArea.value);
    outputArea.value = textDesencriptado;
    inputArea.value = "";
    ajustarAltura(outputArea);
  }
  
  function ajustarAltura(textarea) {  // Escalabilidad vertical por cada salto de linea para text-mensaje
    textarea.style.height = 'auto'; 
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}