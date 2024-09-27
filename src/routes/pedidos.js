const express = require('express')

const PedidoController = require('../controllers/pedidoController')
const pedidoController = require('../controllers/pedidoController')

const router = express.Router()

router.get('/', (req, res) => pedidoController.getAllPedidos(req, res))

router.post('/', (req, res) => pedidoController.createPedido(req, res))

module.exports = router;