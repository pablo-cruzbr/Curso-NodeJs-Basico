const mongoose = require("mongoose");

const connectToDataBase = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://admin:<db_password>@cluster0.gin0m4g.mongodb.net/?appName=Cluster0"
        );
        console.log("Conexão ao banco de dados realizada com sucesso!");
    } catch (error) {
       
        console.log('Ocorreu um erro ao se conectar com o banco de dados:', error);
    }
};

module.exports = connectToDataBase;