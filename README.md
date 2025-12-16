# 📘 Curso de Node.js Básico

Este repositório contém minhas **anotações e práticas** realizadas durante a conclusão de um **curso básico de Node.js**, onde apliquei os conceitos criando commits atômicos e organizando o aprendizado de forma progressiva.

---

## 🚀 O que é Node.js?

O **Node.js** é um ambiente de execução JavaScript no lado do servidor, construído sobre o motor **V8 do Google Chrome**.

### 🧠 Como ele funciona?

* Executa JavaScript fora do navegador
* Utiliza um modelo **assíncrono e orientado a eventos**
* Baseado em **single-thread**, mas altamente escalável

### 🎯 Para que ele serve?

* Criação de **backends**
* Desenvolvimento de **APIs REST**
* Envio de **JSON** para aplicações front-end
* Integração com bancos de dados

---

## ✅ Vantagens do Node.js

* 🔋 Ótimo uso de memória (baixo custo)
* 🤝 Harmonia com o front-end (ambos utilizam JavaScript)
* ⚡ Muito rápido, simples e escalável
* 📈 Presença extremamente forte no mercado

---

## 📦 Módulos no Node.js

### Tipos de módulos:

* **Módulos próprios**: podemos criar nossos próprios arquivos e importá-los
* **Módulos nativos**: o Node.js já vem com vários módulos pré-instalados

  * Exemplos: `path`, `fs`, `http`

### Importação de módulos

* Utilizamos o **CommonJS**:

```js
const fs = require('fs');
```

---

## 📦 NPM — Node Package Manager

O **NPM** é o gerenciador de pacotes do Node.js.

### Funções do NPM:

* Instalar módulos de terceiros
* Gerenciar dependências do projeto

### Estrutura importante:

* `node_modules/` → pasta onde ficam os módulos instalados
* `package.json` → lista todas as dependências do projeto
* `package-lock.json` → registra as versões exatas dos módulos

### Comandos básicos:

```bash
npm init               # Cria o package.json
npm install express    # Instala um pacote localmente
npm install -g nodemon # Instala um pacote globalmente
```

---

## 📁 Trabalhando com o módulo FS

### Criando pastas com o módulo `fs`

📄 **Arquivo:** `models/fs.js`

```js
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/test'), (error) => {
  if (error) {
    return console.log('Error');
  }
});
```

---

## 🌐 Criando um Servidor com Node.js

📄 **Arquivo:** `http.js`

* Utilizamos o módulo `http`
* Criamos um servidor capaz de responder requisições

### Inicializar o servidor:

```bash
npm run start:dev
```

---

## 📄 HTML e JSON

* Criação de respostas em **HTML**
* Retorno de **JSON** para consumo por aplicações front-end

> O Node.js é amplamente utilizado para criar **APIs** que enviam JSON para o front-end.

---

## 🗄️ Banco de Dados — MongoDB

### Operações realizadas:

* Criar registros
* Ler dados
* Atualizar informações
* Remover registros

### Credenciais (exemplo de estudo):

```txt
user: admin
password: 412578code
```

### String de conexão:

```txt
mongodb+srv://admin:<db_password>@cluster0.gin0m4g.mongodb.net/
```

---

## 🔌 Middlewares

### O que são Middlewares?

> Funções que são executadas **antes** da requisição chegar à rota final.

* Muito utilizados em frameworks como **Express**
* Permitem validações, autenticação, logs, etc.

---

## 🖥️ HTML Dinâmico com EJS

### O que é EJS?

* Template engine para Node.js
* Permite injetar dados do backend diretamente no HTML

### Instalação:

```bash
npm install ejs
```

### Uso:

* Buscar dados do banco
* Enviar para o EJS
* Renderizar HTML dinâmico

---

## 🧠 Conclusão

Este repositório representa meu **primeiro contato prático com Node.js**, abordando desde conceitos básicos até:

* Criação de servidores
* APIs que retornam JSON
* Conexão com banco de dados
* Uso de middlewares
* Renderização de HTML dinâmico com EJS

📌 Todos os aprendizados foram versionados com **commits atômicos**, reforçando boas práticas de Git e organização de código.

---

🚀 **Seguimos evoluindo!**
