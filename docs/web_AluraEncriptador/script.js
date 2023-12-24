const inputArea = document.querySelector('#text-input');
const outputArea = document.querySelector('#text-mensaje');

// Botones Encriptar | Desencriptar

function btnEncriptar() {
  const textoEntrada = inputArea.value;
  // Verificar si el texto contiene letras con acentos o mayúsculas
  if (/[A-Z]/.test(textoEntrada)) {
    alert("El texto no puede contener letras mayusculas.");
    return;
  } else if (/[áéíóúüÁÉÍÓÚÜ]/.test(textoEntrada)) {
    alert("El texto no puede contener letras con acentos.");
    return;
  }

  // Continuar con el flujo normal si no hay mayúsculas o acentos
  const textEncriptado = encriptar(inputArea.value);
  outputArea.value = textEncriptado;
  inputArea.value = "";
  if (window.innerWidth <= 768) {
    outputArea.style.height = 'auto';
    outputArea.style.height = outputArea.scrollHeight + 'px';
  } else {
    outputArea.style.height = 'auto';
    outputArea.style.height = '400px';
  }
  mostrarBtnCopiar();
  colorEncriptado();
}

function encriptar(string) {
  return [...string].map(caracter => String.fromCharCode(caracter.charCodeAt(0) + 1)).join('');
}

function btnDesencriptar() {
  const textDesencriptado = desencriptar(inputArea.value);
  outputArea.value = textDesencriptado;
  inputArea.value = "";
  if (window.innerWidth <= 768) {
    outputArea.style.height = 'auto';
    outputArea.style.height = outputArea.scrollHeight + 'px';
  } else {
    outputArea.style.height = 'auto';
    outputArea.style.height = '400px';
  }
  mostrarBtnCopiar();
  colorDesencriptado();
}

function desencriptar(string) {
  return [...string].map(caracter => String.fromCharCode(caracter.charCodeAt(0) - 1)).join('');
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

// Boton Pegar

document.addEventListener('copy', function (event) {
  const textoCopiado = window.getSelection().toString().trim();
  const botonCopiado = document.getElementById('btn-pegar');

  if (textoCopiado) {
    botonCopiado.style.display = 'inline-block';
  } else {
    botonCopiado.style.display = 'none';
  }
});

function btnPegar() {
  // Obtener el contenido del portapapeles
  navigator.clipboard.readText().then(function (textoCopiado) {
    // Asignar el texto al textarea
    inputArea.value = textoCopiado;
    // Ocultar el boton
    const btnPaste = document.getElementById('btn-pegar');
    btnPaste.style.display = 'none';

  }).catch(function (err) {
    console.log('No se pudo leer el portapapeles, ' + err);
  });
}