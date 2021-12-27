import sequelize from 'sequelize';
import {database} from '../database/database';

const actividades = database.define('formularioactividades', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    responsableactividad: {
        type: sequelize.TEXT
    },
    objetivoestr:{
        type: sequelize.TEXT
    },
    descripcionact:{
        type: sequelize.TEXT
    },
    publicoobj:{
        type: sequelize.TEXT
    },
    contraparteact:{
        type: sequelize.TEXT
    },
    mecanismoconv:{
        type: sequelize.TEXT
    },
    lugar:{
        type: sequelize.TEXT
    },
    costototal:{
        type: sequelize.INTEGER
    },
    aportesolic:{
        type: sequelize.INTEGER
    },
    indicadoresmed:{
        type: sequelize.TEXT
    },
    proccompr:{
        type: sequelize.FLOAT
    },
    tipoverific:{
        type: sequelize.TEXT
    },
    fecha:{
        type: sequelize.DATEONLY
    },
    tipoact:{
        type: sequelize.TEXT
    },
    ideasfuerzacomunicaciones:{
        type: sequelize.TEXT
    }
},{
    timestamps: false
});

export default actividades;