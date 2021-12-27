import sequelize from 'sequelize';
import {database} from '../database/database';

const reuniones = database.define('formularioreuniones', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    responsablereunion: {
        type: sequelize.TEXT
    },
    modalidad:{
        type: sequelize.TEXT
    },
    fecha:{
        type: sequelize.DATEONLY
    },
    hora:{
        type: sequelize.TIME
    },
    minuta:{
        type: sequelize.TEXT
    },
    contraparte:{
        type: sequelize.TEXT
    },
    lugaroformato:{
        type: sequelize.TEXT
    },
    asistentesinvitados:{
        type: sequelize.TIME
    },
    asistentespresentes:{
        type: sequelize.TIME
    },
    compromisoscrtic:{
        type: sequelize.TEXT
    },
    compromisoscontraparte:{
        type: sequelize.TEXT
    },
    verificadortipo:{
        type: sequelize.TEXT
    },
    tresideas:{
        type: sequelize.TEXT
    }
},{
    timestamps: false
});

export default reuniones;