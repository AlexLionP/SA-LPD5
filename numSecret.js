const prompt = require("prompt-sync")();
let numSecret = Math.floor(Math.random() * 100);

let flagResp = false;
let flagIsNumber = false;
const trys = [];
let tryNum;
while (!flagResp) {
  while (!flagIsNumber) {
    tryNum = Number(prompt("Intenta adivinar un numero del 1 al 100 : "));
    if (!isNaN(tryNum)) flagIsNumber = true;
    else {
      console.log("Valor ingresado no es un numero valido vuelve a intertalo");
    }
  }
  if (numSecret === tryNum) {
    console.log("Felicidades, adivinaste el número secreto \n");
    console.log("Los numeros que intentastes son: \n");
    console.table(trys);
    flagResp = true;
  } else {
    console.log(
      "Ups, el número secreto es incorrecto, vuelve a intentarlo. \n"
    );
    trys.push(tryNum);
    flagIsNumber = false;
    if (tryNum > numSecret) console.log("Intenta con numeros menores");
    if (tryNum < numSecret) console.log("Intenta con numeros mayores");
  }
} 

/*
Instrucciones:
Crear un programa en Javascript que realice lo siguiente:
Debe pedirle al usuario que intente adivinar el número secreto por prompt
o por input, dicho número será del 1 al 100.
Si el usuario no adivina el número secreto, debe mostrar un mensaje por consola 
o DOM diciendo: “Ups, el número secreto es incorrecto, vuelve a intentarlo. ” y 
volver a solicitarle que ingrese un número.
Si el usuario adivina el número secreto debe de mostrar un mensaje por consola 
o DOM diciendo: “Felicidades, adivinaste el número secreto”. Además debe imprimir 
por consola o DOM la lista de números introducidos antes de adivinar el número secreto.
El número secreto puede ser introducido manualmente o generar un número aleatorio, 
pero recuerda que debe ser del 1 al 100.
Debe ser capaz de identificar si el dato de entrada es de tipo number, 
en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub 
y adjuntar el link.
Puedes implementar un tipo de ayuda para que el usuario se guíe en caso de que el 
número introducido sea menor o mayor al número secreto.
*/
