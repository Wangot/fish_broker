module.exports = function(sequelize, DataTypes) {
    var Transaction = sequelize.define("Transaction", {
        price: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0,
            get: function(){
                var result = 0;

                var price = this.getDataValue('price');

                if(price) {
                    result = parseInt(price, 10);
                }

                return result;
            }
        },
        description: DataTypes.TEXT,
        type: {
            type: DataTypes.ENUM('CREDIT', 'PAYMENT', 'CASH', 'CHEQUE', 'OPEX', 'CAPITAL', 'SALARY', 'VALE'),
            defaultValue: 'CREDIT'
        }
    }, 
    {
        underscored: true,
        tableName: 'transaction',
        instanceMethods: {
        },
        classMethods: {
            associate: function(models) {
                Transaction.belongsTo(models.Profile)
            }
        },
        hooks: {
        }
    });

    return Transaction;
};