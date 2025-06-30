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

    static recuperar(id){
        for(let i = 0; i < Alunos.length; i++){
            if (Alunos[i].id == id){
                return Alunos[i];
            }
        }
        return null;
    }

    static editar(id, aluno){
        for(let i = 0; i < Alunos.length; i++){
            if(Alunos[i].id == id){
                Alunos[i].nome = aluno.nome;
                Alunos[i].curso = aluno.curso;
                Alunos[i].ira = aluno.ira;
                return Alunos[i]
            }
        }
        return null;
    }

    static deletar(id){
        for(let i = 0; i < Alunos.length; i++){
            if(Alunos[i].id == id){
                Alunos.splice(i,1);
                return true;
            }
        }
        return false;
    }
}

module.exports = AlunoServices;