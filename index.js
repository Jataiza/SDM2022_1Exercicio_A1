const express = require('express');//importei o express para utilizar no meu programa.

const app = express(); // intancie o objeto app na classe express ();

app.post('/user', [
    //validação dos dados
    body('nome').isEmail(),
    body('Genero').isEmail({ min: 5 })
  ], (req, res) => {
    // caso encontre erros, ficará nessa variável errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({
        msg: "messagem realizado com susseso"
});



const produtos = [
    { nome: "Lápis", idade: 2.20 },
    { nome: "Cardeno", preco: 6.20 },
    { nome: "Caneta", preco: 7.90 },
];
const filmes = [
    { nome: "Matrix"},
    { Genero: "Ficcção cientifica",},
];
const musica = [
    { nome: "Enemy"},
    { Genero: "Pop Rock",},
];

app.get('/', (req, res) => {
    console.log("Alguém acionou a rota raiz.");
    return res.send("Servidor esta funcionado corretamente")
});


app.get('/produtos', (req, res) => {
    return res.json(produtos);
});
app.get('/filmes/{id}', (req, res) => {
    return res.json(filmes);
});
app.post('/musica/{id}/{autor}/{genero}', (req, res) => {
    return res.json(musica);
});

//http://localhost:3000
app.listen(3000);

