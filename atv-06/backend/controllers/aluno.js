const AlunoModel = require("../models/alunos");
const Alunos = require("../data/dados");

class AlunoServices {
    static listar() {
        return Alunos;
    }
}

module.exports = AlunoServices;