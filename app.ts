// TipeScript
function pruebadecursoAngular(param1 :string,param2 :string = "parametro por default",param3? :string) {
    console.log("cadena 1" + param1);
    console.log("cadena 2" + param2);
    console.log("cadena 3" + param3);
}
// pruebadecursoAngular("Daniel");
// pruebadecursoAngular("diego","ama","DIOS");

// ------------------------------------------------------------------------------

// var sumarNumeros = function (param1 :number,param2 :number = 0) {
//     return param1 + param2;
// }
var sumarNumeros = (param1 :number,param2 :number = 0) => param1 + param2;

let restul = sumarNumeros(7,450);
// console.log(restul);
// ------------------------------------------------------------------------------
//son operaciones que van a necesita mucho tiempo, transacciones asincronicas.
let mipromise = new Promise( function(resolve:any,reject:any){
    // resolve();
    reject();
});

mipromise.then(function () {
    console.log("La operacion promesa ok");
}, function(){
    console.log("La operacion promesa Error");
});

// ------------------------------------------------------------------------------

import { Persona } from "./Persona";

// let objetopersona = new Persona(100);
// objetopersona.caminar();

var objeto = new Persona(600);
objeto.caminar();

// comando para ejecutar en terminal
// tsc app.ts

