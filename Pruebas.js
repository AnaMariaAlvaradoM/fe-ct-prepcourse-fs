

// function esPar(num) {
//     // Retorna true si "num" es par.
//     // De lo contrario, retorna false.
//     // Tu código:
//     if ((num % 2) === 0){
//        return true;
//     }
//     else{
//         return false;
//     }
//  }
//  //console.log(esPar(11))
// //node Pruebas.js

// function agregarSimboloExclamacion(str) {
//     // Agrega un símbolo de exclamación al final del string "str" y retórnalo
//     // Ejemplo: "hello world" ---> "hello world!"
//     // Tu código:
//     return str + "!";
//  }
//  console.log(agregarSimboloExclamacion("hello world"))

//  function combinarNombres(nombre, apellido) {
//     // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
//     // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
//     // Tu código:
//     return nombre + " " + apellido;
//  }
//  console.log(combinarNombres("Soy", "Henry"))

//  function obtenerSaludo(nombre) {
//     // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
//     // Ejemplo: "Martin" ---> "Hola Martin!"
//     // Tu código:
//     return "Hola" + " " + nombre + "!";
//  }
//  console.log(obtenerSaludo("Martin"))

// var arr =["Mechi", 33, "Ana"]
// var num =["Pizza", "Hamburguesa", "Hot Dog", "Lasagna"]
// var arreglo = [4, 'Hola', 45, 'Adios'];
// function soloStrings(array) {
//     // La funcion llamada 'soloStrings' recibe como argumento un arreglo de enteros y strings llamado 'array'.
//     // Debe devolver un arreglo con solo los strings.
//     // Ej:
//     // soloStrings([1, 'Henry', 2, 'Toni']) debe retornar ['Henry', 'Toni']
  
//     // Tu código aca:
//     var nuevoArray = [ ];
//     for (var i = 0; i < array.length; i++) {
//       if (typeof array[i] === 'string' || array[i] instanceof String) nuevoArray.push(array[i])
//     }
//     return nuevoArray;

//   }
  
// console.log (soloStrings(arreglo));
// //   var arreglo = [4, 'Hola', 45, 'Adios'];

// // function sacarSoloLosStrings(array) {
// //   let nuevoArray = [ ];
// //   for (let i = 0; i < array.length; i++) {
// //     if (typeof array[i] === 'string' || array[i] instanceof String) nuevoArray.push(array[i])
// //   }
// //   return nuevoArray;
// // }

// function puedeManejar(edad){
//     if(edad>=18){
//       return "Puede Manejar"
//     }
//     else{
//       return "No puede manejar"
//     }
// }
// console.log(puedeManejar(30))
   
// function encontrarVocalA(string){
//   for(var i = 0 ; i < string.length ; i++){
//     if(string [i] === "a"){
//       return "Encontramos la volcal A"
//     }
//   }
//   return "El string que recibimos por parámetro con tiene la vocal A"
// }
// console.log(encontrarVocalA("Ana"))

// function cuentaRegresiva(num){
//   for(var i = num; i >= 0; i--){
//     console.log(i)
//   }
// }
// cuentaRegresiva(3)

// function cuentaRegresiva(num){  
//   for(var i = num; i>= 0; i--)
//     console.log(i)
// }

// cuentaRegresiva(5)

// function Deletrear(string){
//   for(var i = 0; i < string.length; i++){
//      console.log(string[i])
//   }
// }
// Deletrear("Manzana y Mamá")
//CICLO FOR
// for(var i = 0 ; i < 5; i++){
//   console.log(i);
// }

function encontrarVocalA(string){
  for(var i = 0; i < string.length ; i ++){
      if(string[i] === 'a'){
        return 'Encontre la A'
      }
  }
  return 'No tiene la letra A';
}    
console.log(encontrarVocalA('Pepina'))
