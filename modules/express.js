const express = required('express')
const app = express()

app.get('/home', () => {
    res.status(200).send('<h1>hello word</h1>')
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta: ${port}`))