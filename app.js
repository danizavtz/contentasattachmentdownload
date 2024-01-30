const express = require('express')
const fs = require('fs');
const app = express()
app.use(express.json())

app.get('/usuarios', (req, res) => {
    const usuarios = [{
        "id" : "f7379ae8-8f9b-4cd5-8221-51efe19e721b",
        "apelido" : "josé",
        "nome" : "José Roberto",
        "nascimento" : "2000-10-01",
        "stack" : ["C#", "Node", "Oracle"]
    },
    {
        "id" : "5ce4668c-4710-4cfb-ae5f-38988d6d49cb",
        "apelido" : "ana",
        "nome" : "Ana Barbosa",
        "nascimento" : "1985-09-23",
        "stack" : ["Node", "Postgres"]
    }];
    res.status(200).json(usuarios)
});

app.get('/usuarios/download', (req, res) => {
    const usuarios = [{
        "id" : "f7379ae8-8f9b-4cd5-8221-51efe19e721b",
        "apelido" : "josé",
        "nome" : "José Roberto",
        "nascimento" : "2000-10-01",
        "stack" : ["C#", "Node", "Oracle"]
    },
    {
        "id" : "5ce4668c-4710-4cfb-ae5f-38988d6d49cb",
        "apelido" : "ana",
        "nome" : "Ana Barbosa",
        "nascimento" : "1985-09-23",
        "stack" : ["Node", "Postgres"]
    }];
    res.setHeader('Content-Disposition', 'attachment; filename=test.json');
    res.status(200).send(usuarios).end()
})

app.get('/usuarios/download1', (req, res) => {
    const usuarios = [{
        "id" : "f7379ae8-8f9b-4cd5-8221-51efe19e721b",
        "apelido" : "josé",
        "nome" : "José Roberto",
        "nascimento" : "2000-10-01",
        "stack" : ["C#", "Node", "Oracle"]
    },
    {
        "id" : "5ce4668c-4710-4cfb-ae5f-38988d6d49cb",
        "apelido" : "ana",
        "nome" : "Ana Barbosa",
        "nascimento" : "1985-09-23",
        "stack" : ["Node", "Postgres"]
    }];
    fs.writeFileSync('data.json', usuarios);
    res.download('data.json', 'test.json');
});

app.listen(3000)