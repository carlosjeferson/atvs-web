var express = require('express');
const AlunoServices = require('../controllers/aluno');
var router = express.Router();

router.get("/listar", (req, res, next) => {
    res.json(AlunoServices.listar());
})

router.post("/criar", (req, res, next) =>{
    const AlunoResposta = AlunoServices.criar(req.body);
    res.json(AlunoResposta);
})

router.get("/recuperar/:id", (req, res, next) => {
    const AlunoRecuperado = AlunoServices.recuperar(req.params.id);
    res.json(AlunoRecuperado);
})

router.put("/editar/:id", (req, res, next) => {
    const AlunoEditado = AlunoServices.editar(req.params.id, req.body);
    res.json(AlunoEditado);
})

router.delete("/deletar/:id", (req, res, next) => {
    const resposta = AlunoServices.deletar(req.params.id);
    res.json({"resposta:" : resposta});
})

module.exports = router;