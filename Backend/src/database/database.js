import sequelize from 'sequelize';

export const database = new sequelize(
    'crtic', //Nombre bd
    'postgres', //Usuario
    'hola', //Contraseña
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 1000
        },
        logging: false,
        define: {
            "createdAt": "createdat",
            "updatedAt": "updatedat",
            freezeTableName: true
        }
    }
)