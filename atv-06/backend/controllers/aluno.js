const AlunoModel = require("../models/alunos");
const Alunos = require("../data/dados");

let id = 3;

class AlunoServices {
    static listar() {
        return Alunos;
    }

    static criar(alunoJson){
        const novoAluno = new AlunoModel (
            ++id, 
            alunoJson.nome,
            alunoJson.curso,
            alunoJson.ira
        )
        Alunos.push(novoAluno);
        return novoAluno;
    }
}

module.exports = AlunoServices;