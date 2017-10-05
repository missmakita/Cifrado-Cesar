/* Prompt que solicita la frase al usuario y valida que no ingrese un campo vacío ni números. 
Si pasa la validación, avanza a la función de cifrado, si no, vuelve a pedir una frase.*/

var numbers = [1,2,3,4,5,6,7,8,9,0];

do{
	var respuesta = prompt('Ingresa una frase que quieres cifrar:');	
	
	if (typeof respuesta == 'string') {
		cipher(respuesta, 33);
	} else if (numbers.test(respuesta)) {
		alert('Ingresa una frase válida');
	}
} while (numbers.test(respuesta) || respuesta == '');	


/*Función que toma la respuesta y el valor fijo. 
Transforma de ASCII a alfabeto tradicional, aplica la fórmula de Cifrado César, 
transforma de vuelta a ASCII y retorna la frase cifrada. */

var respuesta = prompt('Ingresa una frase que quieres cifrar:');
var str = respuesta;

function cipher(str, key) {
	
	var result = '';
	

	for (var i = 0; i < str.length; i++) {

		result += String.fromCharCode(((code - 65 + amount) % 26) + 65);
	}
	return result;
}

alert(result);

