module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
        first_name: {
            type: DataTypes.STRING(100),
            defaultValue: ''
        },
        middle_name: {
            type: DataTypes.STRING(100),
            defaultValue: ''
        },
        last_name: {
            type: DataTypes.STRING(100),
            defaultValue: ''
        },
        name:{
            type: DataTypes.STRING(100),
            defaultValue: ''
        },
        email: {
            type:  DataTypes.STRING(100),
            allowNull: true,
            validate: {
                isEmail: true
            }
        },
        mobile: {
            type:  DataTypes.STRING(100),
            validate: {
            }
        },
        birthday: {
            type:  DataTypes.DATE
        },
        address: DataTypes.STRING,
        city: DataTypes.STRING(100),
        zip_code: DataTypes.STRING(10),
        type: {
            type: DataTypes.ENUM('USER', 'BROKER', 'FISHING_BOAT', 'EMPLOYEE', 'CREDITOR'),
            defaultValue: 'CREDITOR'
        }
    },
    {
        underscored: true,
        tableName: 'profile',
        classMethods: {
            associate: function(models) {
                // Profile.hasOne(models.User)
            }
        },
        hooks: {
            /*beforeCreate: function(profile, options, fn){
                fn(null, profile);
            },
            beforeUpdate: function(profile, options, fn){
                fn(null, profile);
            }*/
        }
    });

    return Profile;
};