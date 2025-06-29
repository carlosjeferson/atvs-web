var express = require('express');
const AlunoServices = require('../controllers/aluno');
var router = express.Router();

router.get("/listar", (req, res, next) => {
    res.json(AlunoServices.listar());
})

module.exports = router;