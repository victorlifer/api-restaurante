const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./src/config/dataBase')
const pedidosRouter = require('./src/routes/pedidos')


const app = express()
const PORT = 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.set("views", "src/views")

app.use('/pedido', pedidosRouter)

sequelize
.authenticate()
.then(() =>{
    console.log("Conexão com o banco de dados com sucesso");
    return sequelize.sync();
})
.catch((err) =>{
    console.error("Não conectado!!", err);
});



// iniciando rota
app.get('/', (req, res) =>{
    res.send("Bem-vindo, inicia agora aplicação de Restaurante");
});

/// iniciando um servidor

app.listen(PORT, () =>{
    console.log(`Servidor ativado, <http://localhost>:${PORT}`);
});