import { stripTypeScriptTypes } from "module";

let numeroDeAlunos: number = 22;
console.log(numeroDeAlunos)

let nomeDoProf: string = "Lana Mesquita";
console.log(nomeDoProf)

let aulaEmAndamento: boolean = false;
console.log(aulaEmAndamento)

let nomeDoAluno: string = "Lara Maria";
console.log(nomeDoAluno)

type Notebook = {

    marca: string;
    valor: number;
}

let notebook: Notebook = {
    
    marca: "Samsung" , valor: 4000
}

console.log(`o notebook da marca ${notebook.marca} está custando ${notebook.valor} atualmente.`)