const { DataTypes } = require('sequelize')
const sequelize = require('../config/dataBase')

const PedidoModel = sequelize.define('pedido', { 
    customer : {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    
    itens: {
       type: DataTypes.JSON,
       allowNull: false 
    },

    total: {
        type: DataTypes.STRING,
         allowNull: false
    },

    status: {
        type: DataTypes.STRING,
        defaultValue: 'pendentes'
    },
}, {
    tableName: 'Pedidos'
});

module.exports = PedidoModel;