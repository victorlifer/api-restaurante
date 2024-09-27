const Pedido = require('../models/pedidoModel')

class PedidoController {
    // obtendo todos os pedidos e renderizar

    async getAllPedidos(req, res){
        try{
            const pedidos= await Pedido.findAll()
            res.render('pedido/index', { title:  'Pedidos', pedidos});
        } catch(err){
            res.status(500).json(console.err(err.mensage))
        }
    }

    async createPedido(req, res){
        const { cliente, itens, total } = req.body;
        try {
            await Pedido.create({ cliente, itens, total })
            res.redirect('/pedidos');
        } catch(err) {
            res.status(500).json(console.err(err.mensage))
        }
    }
}

module.exports = new PedidoController()