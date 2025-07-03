const AlunoModel = require("../models/alunoModel");
const Alunos = require("../data/dados");

let id = 3;

class AlunoServices {
    static listar() {
        return Alunos;
    }

    static criar(alunoJson){
        try {
            const novoAluno = new AlunoModel (
                ++id, 
                alunoJson.nome,
                alunoJson.curso,
                alunoJson.ira
            )
            Alunos.push(novoAluno);
            return novoAluno;
            
        } catch (error) {
            throw new Error(`Erro ao criar aluno: ${error.message}`);
        }
    }

    static recuperar(idBusca){
        return Alunos.find(aluno => aluno.id == idBusca) || null;
    }

    static editar(idBusca, dadosAtualizados){
        const index = Alunos.findIndex(aluno => aluno.id == idBusca);

        if (index === -1) return null;


        try {
            // Mantém o mesmo ID, apenas atualiza os dados
            const alunoAtualizado = new AlunoModel(
                Alunos[index].id,
                dadosAtualizados.nome,
                dadosAtualizados.curso,
                dadosAtualizados.ira
            );

            Alunos[index] = alunoAtualizado;
            return alunoAtualizado;
        } catch (error) {
            throw new Error(`Erro ao editar aluno: ${error.message}`);
        }
    }

    static deletar(idBusca){
        const index = Alunos.findIndex(aluno => aluno.id == idBusca);

        if (index === -1) return false;

        Alunos.splice(index, 1);
        return true;
    }
}

module.exports = AlunoServices;