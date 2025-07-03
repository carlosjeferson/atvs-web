const express = require('express');
const AlunoServices = require('../controllers/alunoController');
const router = express.Router();

router.get("/listar", (req, res) => {
    const alunos = AlunoServices.listar();
    return res.status(200).json(alunos);
});

router.post("/criar", (req, res) => {
    try {
        const alunoCriado = AlunoServices.criar(req.body);
        return res.status(201).json(alunoCriado); // 201: Created
    } catch (error) {
        return res.status(400).json({ erro: error.message });
    }
});

router.get("/recuperar/:id", (req, res) => {
    const aluno = AlunoServices.recuperar(req.params.id);
    if (!aluno) {
        return res.status(404).json({ erro: "Aluno não encontrado" });
    }
    return res.status(200).json(aluno);
});

router.put("/editar/:id", (req, res) => {
    try {
        const aluno = AlunoServices.editar(req.params.id, req.body);
        if (!aluno) {
            return res.status(404).json({ erro: "Aluno não encontrado" });
        }
        return res.status(200).json(aluno);
    } catch (error) {
        return res.status(400).json({ erro: error.message });
    }
});

router.delete("/deletar/:id", (req, res) => {
    const deletado = AlunoServices.deletar(req.params.id);
    if (!deletado) {
        return res.status(404).json({ erro: "Aluno não encontrado" });
    }
    return res.status(200).json({ mensagem: "Aluno deletado com sucesso" });
});

module.exports = router;
