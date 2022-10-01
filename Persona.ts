export class Persona {

    nombre: string = "";
    apellido: string = "";
    edad : string = "";
    kilometro : number = 0;

    constructor(cuantoskilometros:number){        
        this.kilometro = cuantoskilometros;
    }

    caminar(){
        console.log("estoy caminando " + this.kilometro);

    }

}