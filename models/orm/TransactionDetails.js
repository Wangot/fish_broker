module.exports = function(sequelize, DataTypes) {
    var TransactionDetail = sequelize.define("TransactionDetail", {
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
        description: DataTypes.TEXT
    }, 
    {
        underscored: true,
        tableName: 'transaction_detail',
        instanceMethods: {
        },
        classMethods: {
            associate: function(models) {
                TransactionDetail.belongsTo(models.Transaction)
            }
        },
        hooks: {
        }
    });

    return TransactionDetail;
};