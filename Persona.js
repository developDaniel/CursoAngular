"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(cuantoskilometros) {
        this.nombre = "";
        this.apellido = "";
        this.edad = "";
        this.kilometro = 0;
        this.kilometro = cuantoskilometros;
    }
    Persona.prototype.caminar = function () {
        console.log("estoy caminando " + this.kilometro);
    };
    return Persona;
}());
exports.Persona = Persona;
