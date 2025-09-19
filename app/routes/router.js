const express = require("express");
const router = express.Router();
const {body, validationResult} = require("express-validator")

router.get("/", (req, res) => {
 
    res.render("pages/index",{ "nome":null, "email":null, "telefone":null, "assunto":null, "mensagem":null, resultado: null, valores: {notas:""} });
});

router.post("/media",
    body("nome").isInt({min: 10, max: 30}).withMessage("Escreva o nome completo ex: fulano da silva andrade"),
    body("email").isEmail.withMessage("Escreva o email ex: email@gmail.com"),
    body("telefone").i({min: 11, max: 11}).withMessage("Escreva seu telefone ex: 11 987654321"),
    body("assunto").isInt({min: 0, max: 20}).withMessage("Escreva o assunto que deseja falar"),
    body("mensagem").isInt({min: 0, max: 1000}).withMessage("Escreva a mensagem que deseja enviar (no máximo 1000 caracteres)"),

(req, res) => {


    const nome = validationResult(req);
    const email = validationResult(req);
    const telefone = validationResult(req);
    const assunto = validationResult(req);
    const mensagem = validationResult(req);

    if(erros.isEmpty(), erros2.isEmpty()){
    

    const nome = parseInt(req.body.nome);
    const email = parseInt(req.body.email);
    const telefone = parseInt(req.body.telefone);
    const assunto = parseInt(req.body.assunto);
    const mensagem = parseInt(req.body.mensagem);

    let categoria;

    if (nome) {
        categoria = "Mensagem enviada com sucesso!";
    } else {
        categoria = "Mensagem não enviada.";
    }

    let objJson = {nota1, nota2, notas, categoria};

    res.render("pages/index", {erros:null, erros2:null, resultado: objJson, valores: req.body });
}else{
    console.log(erros)
    res.render("pages/index", {erros:erros, erros2:erros2, resultado:null, valores:req.body})
}
});

module.exports = router;