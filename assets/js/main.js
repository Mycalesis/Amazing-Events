
// let miNombre = "Lucy";

// let miApellido = "Avati";

// let miEdad = 27;

// let miMascota = "Pancho";

// let edadMascota = 8;

// console.log("Hola mi nombre es " + miNombre + miApellido + " y tengo " + miEdad + ". Ademas tengo un gato llamado " + miMascota + " que tiene " + edadMascota + " años");

// let textoPresentacion = "Hola mi nombre es " + miNombre + " " + miApellido + " y tengo " + miEdad + ". Ademas tengo un gato llamado " + miMascota + " que tiene " + edadMascota + " años";

// console.log(textoPresentacion);

// let sumaEdad = miEdad + edadMascota;

// let restaEdad = miEdad - edadMascota;

// let productoEdad = miEdad * edadMascota;

// let divisionEdad = miEdad / edadMascota;

// let miNombre = prompt("Ingrese su nombre");

// let miApellido = prompt("Ingrese su apellido");

// let miEdad = prompt("Ingrese su edad");

// let miMascota = prompt("Ingrese el nombre de su mascota");

// let edadMascota = prompt("Ingrese la edad de su mascota");

// document.write(miNombre);

// document.write("Hola mi nombre es " + miNombre + " " + miApellido + " y tengo " + miEdad + ". Ademas tengo un gato llamado " + miMascota + " que tiene " + edadMascota + " años");

// // alumno

// let alumno = {
//     nombre: "Lucy",
//     apellido: "Avati",
//     edad: 27,
//     mascota: "Pancho",
//     carrera: "Programador"
// }

// console.table(alumno);


// let mascota = {
//     nombre: "Pancho",
//     edad: 8,
//     peso: 7,
//     color: "gris",
//     colorOjos: "verdes"
// }

// console.table(mascota);

// var frutas = ["Manzana", "Pera", "Banana", "Melon", "Granada"];


// for (let i = 0; i < frutas.length; i++) { 
//     console.log(frutas[i]);
// }

// var numeros = [1, 2, 3, 4, 5];


//     for (let i = 0; i < numeros.length; i++) { 
//         console.log(numeros[i]);
// }

// var familia = ["James", "Angela", "Mary", "Maria", "Laura" ];


//     for (let i = 0; i < familia.length; i++) {
//         console.log(familia[i]);
//     }
// var textoAleatorio = familia[4]+ " compró " + numeros[3] + " kilos de "+ frutas[3];


// --------------------------------------------
// Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:
// Mi edad es igual a la de mi compañero: false
// Mi edad es mayor a la de mi compañero: true
// Mi edad es menor a la de mi compañero: false


// let edad_1 = (prompt("Ingrese su edad..."));

// let edad_2 = (prompt("Ingrese la edad de su compañero..."));

// let edadesIguales = edad_1 == edad_2;

// let soyMayor = edad_1 > edad_2;

// let soyMenor = edad_1 < edad_2;

// console.log("Mi edad es igual a  la de mi compañero" + " " + edadesIguales);

// console.log("Mi edad es mayor a la de mi compañero" + " " + soyMayor);

// console.log("Mi edad es menor a la de mi compañero" + " " + soyMenor);

/////-----------------------------

// Compare su edad ingresada por pantalla con prompt() con el numero 18 y guardarlo en una variable llamada soyMayorDeEdad y
//  mostrar por consola un mensaje que diga: Soy mayor de edad y el valor de la variable.


// let soyMayorDeEdad = edad_1 > 18;

// console.log("Soy mayor de edad y el valor de la variable" + " " + soyMayorDeEdad);

// Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas 
// y en una variable llamada puedeSubir el resultado de la operación resultante de si la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar 
// por consola un mensaje como el siguiente: Puede subir a la atracción y el valor de la variable resultante.

// var edadPersona = parseInt(prompt("Ingrese su edad..."));

// var alturaPersona = parseInt(prompt("Ingrese su altura..."));

// var puedeSubir = (edadPersona > 6 && alturaPersona > 120);

// console.log("Puede subir a la atracción y el valor de la variable ", puedeSubir);

// ejercicio 1 bucles

// let nuevoNumero = prompt("Ingrese el número del cual desee conocer la tabla de multiplicar");

// for (let i = 1; i <= 10; i++) {
//     let resultado = nuevoNumero * i;
//     console.log(nuevoNumero + " x " + i + " = " + resultado);
// }

// ejercicio 2
// let resultado = 0;
// let i = prompt("Ingrese un número");

// while (parseInt(i) > 0) { 
//   resultado += parseInt(i); 
//   i = prompt("Ingrese otro número (0 para salir)");
// }

// console.log("La suma de los números ingresados es: " + resultado);
// ejercicio3
// let resultado = 0;
// let i = prompt("Ingrese un número");

// while (parseInt(i) > 0) { 
//     resultado += parseInt(i); 
//     i = prompt("Ingrese otro número (0 para salir)");
// }

// console.log("La suma de los números ingresados es: " + resultado);
