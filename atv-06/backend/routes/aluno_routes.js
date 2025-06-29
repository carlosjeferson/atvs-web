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

module.exports = router;