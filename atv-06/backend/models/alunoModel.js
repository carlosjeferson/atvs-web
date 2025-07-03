class AlunoModel {
    constructor( id, nome, curso, ira ) {
        this.id = id;
        this.nome = nome;
        this.curso = curso;
        this.ira = parseFloat(ira);

        this.validar();
    }

    validar() {
        if (!this.nome || typeof this.nome !== 'string') {
            throw new Error("Nome inválido");
        }

        if (!this.curso || typeof this.curso !== 'string') {
            throw new Error("Curso inválido");
        }

        if (isNaN(this.ira) || this.ira < 0 || this.ira > 10) {
            throw new Error("IRA deve ser um número entre 0 e 10");
        }
    }
}

// Common JS
module.exports = AlunoModel;
// ECS6
// export default AlunoModel;