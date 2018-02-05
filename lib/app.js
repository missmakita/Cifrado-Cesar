'use strict';

/* 
* Prompt que solicita elegir entre CIFRAR o DESCIFRAR una frase.
* Valida que sólo se ingrese la opción 1 ó 2. No se adminte campo vacío.
* Si pasa la validación, avanza a la opción de cifrado o descifrado, según la opción elegida,
* si no, vuelve a pedir una opción válida.
*/
const promptBtn = document.getElementById('promptBtn');
promptBtn.onclick = function promptCipher() {
  let response = '';

  do {
    response = prompt('Qué te gustaría hacer hoy? Marca tu preferencia: \n 1: Cifrar una frase \n 2: Descifrar una frase');
    // Opción Cifrar
    if (response === '1') {
      optionOne();
      break;
    }
    // Opción Descifrar
    if (response === '2') {
      optionTwo();
      break;   
    } else {
      alert('Ingresa una opción válida. Sólo la opción 1 ó 2 están permitidas.');
    }
  } 
  while (response !== '1' || response !== '2'); 
};

/* 
* Prompt que solicita una frase para cifrar o descifrar, según la opción elegida en el paso anterior.
* Valida que no se ingresen campos vacíos ni números.
* La letras puede ser upper o lower case.
*/

// Prompt "Cifrar"
function optionOne() {
  const re = /\d/g;
  let sentence = '';

  do {
    sentence = prompt('Ingresa la frase que quieres cifrar:');  
    if (typeof sentence === 'string') {
      console.log(sentence);
      if (re.test(sentence) || sentence === '') {
        alert('Ingresa una frase válida');  
      } else {
        alert('Frase original: ' + '"' + sentence + '" \n' + 'Frase Cifrada: ' + '"' + cipher(sentence, 33) + '"');
      }    
    }   
  }
  while (re.test(sentence) || sentence === '');
}

// Prompt "Descifrar"
function optionTwo() {
  const re = /\d/g;
  let sentence = '';

  do {
    sentence = prompt('Ingresa la frase que quieres descifrar:');  
    if (typeof sentence === 'string') {
      console.log(sentence);
      if (re.test(sentence) || sentence === '') {
        alert('Ingresa una frase válida');  
      } else {
        alert('Frase Cifrada: ' + '"' + sentence + '" \n' + 'Frase Descifrada: ' + '"' + decipher(sentence, 33) + '"');
      }    
    }  
  }
  while (re.test(sentence) || sentence === '');
}

/* 
* Las funciones de Cifrado y Descifrado toman la frase y el valor fijo como parámetros. 
* Transforma de ASCII a alfabeto tradicional, aplica la fórmula de Cifrado César, 
* transforma de vuelta a ASCII y retorna la frase cifrada.
*/

// Cifrar
function cipher(str, key) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    // Convierte las mayúsculas
    if (str[i] === str[i].toUpperCase()) {
      result += String.fromCharCode((((str.charCodeAt(i) - 65 + key) % 26) + 65));
    }
    // Convierte las minúsculas
    if (str[i] === str[i].toLowerCase()) {
      result += String.fromCharCode((((str.charCodeAt(i) - 97 + key) % 26) + 97));
    }
  }
  return result;
};

// Descifrar
function decipher(str, key) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    // Convierte las mayúsculas
    if (str[i] === str[i].toUpperCase()) {
      result += String.fromCharCode((((str.charCodeAt(i) + 65 - key) % 26) + 65));
      console.log(result);
    }
    // Convierte las minúsculas
    if (str[i] === str[i].toLowerCase()) {
      result += String.fromCharCode((((str.charCodeAt(i) + 85 - key) % 26) + 97));
    }
  }
  return result;
};