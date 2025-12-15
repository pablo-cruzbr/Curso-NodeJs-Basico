const express = require('express')
const app = express()

app.get('/home', (req, res) => { 
    res.status(200).send('<h1>hello word</h1>')
});

app.get("/users", (req, res)=> {
    const users = [
        {
            name: "Pablo Cruz",
            email: "pablo.cruz@gmail.com",
        },
        {
            name: "Geovanna Silva",
            email: "geovanna.silva@gmail.com",
        }
    ]
    res.status(200).json(users);
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta: ${port}`))