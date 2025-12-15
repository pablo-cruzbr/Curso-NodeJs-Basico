const express = require('express');
const UserModel = require('../src/models/user.model');
const app = express();

app.use(express.json()); 

app.get('/home', (req, res) => { 
    res.status(200).send('<h1>hello word</h1>');
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
    ];
    res.status(200).json(users);
});

app.get('/getusers', async (req, res) => {
    try {
        const user = await UserModel.find({}); 
        
        res.status(201).json(user);
        
    } catch (error) { 
    
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Falha na validação: dados obrigatórios faltando.',
                errors: error.errors
            });
        }
        
        res.status(500).send(error.message);
    }
});

app.get('/getusers/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id);
        
        res.status(201).json(user);
        
    } catch (error) { 
    
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Falha na validação: dados obrigatórios faltando.',
                errors: error.errors
            });
        }
        
        res.status(500).send(error.message);
    }
});


app.patch('/updateuser/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
        
        res.status(201).json(user);
        
    } catch (error) { 
    
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Falha na validação: dados obrigatórios faltando.',
                errors: error.errors
            });
        }
        
        res.status(500).send(error.message);
    }
});

app.delete('/deleteuser/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        
        return res.status(204).send(); 

    } catch (error) { 
        
        if (error.kind === 'ObjectId') {
             return res.status(400).json({ message: 'O ID fornecido não está no formato correto.' });
        }
        
        res.status(500).send(error.message);
    }
});

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body); 
        
        res.status(201).json(user);
        
    } catch (error) { 
    
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Falha na validação: dados obrigatórios faltando.',
                errors: error.errors
            });
        }
        
        res.status(500).send(error.message);
    }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta: ${port}`));