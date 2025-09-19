const express = require("express");
const router = express.Router();
const {body, validationResult} = require("express-validator")

router.get("/", (req, res) => {
 
    res.render("pages/index",{ "nome":null, "":null, resultado: null, valores: {notas:""} });
});

router.post("/media",
    body("nota1").isInt({min: 0, max: 10}).withMessage("Deve ser um número de 0 a 10"),
    body("nota2").isInt({min: 0, max: 10}).withMessage("Deve ser um número de 0 a 10"),
(req, res) => {


    const erros = validationResult(req);
    const erros2 = validationResult(req);

    if(erros.isEmpty(), erros2.isEmpty()){
    

    const nota1 = parseInt(req.body.nota1);
    const nota2 = parseInt(req.body.nota2);
    const notas = (nota1 + nota2) / 2; 
    let categoria;

    if (notas > 9.0 && notas <= 10.0) {
        categoria = "A";
    } else if (notas > 7.5 && notas <= 9.0) {
        categoria = "B";
    } else if (notas > 6.0 && notas <= 7.5) {
        categoria = "C";
    } else if (notas > 4.0 && notas <= 6.0) {
        categoria = "D";
    } else { 
        categoria = "E";
    }

    let objJson = {nota1, nota2, notas, categoria};

    res.render("pages/index", {erros:null, erros2:null, resultado: objJson, valores: req.body });
}else{
    console.log(erros)
    res.render("pages/index", {erros:erros, erros2:erros2, resultado:null, valores:req.body})
}
});

module.exports = router;