import sequelize from 'sequelize';
import {database} from '../database/database';

const clases = database.define('clases', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    rut :{
        type: sequelize.TEXT
    },
    nombre :{
        type: sequelize.TEXT
    },
    apellido :{
        type: sequelize.TEXT
    },
    fecha :{
        type: sequelize.DATEONLY
    },
    estudiantesinscritos :{
        type: sequelize.INTEGER
    },
    estudiantesasistentes :{
        type: sequelize.INTEGER
    },
},{
    timestamps: false
});

export default clases;