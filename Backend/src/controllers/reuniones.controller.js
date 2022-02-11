import reuniones from '../models/reuniones';

export const createReuniones = async (req, res) => {
    try{
        const {
            responsablereunion, 
            modalidad, 
            fecha, 
            hora,
            objetivo, 
            minuta, 
            contraparte, 
            lugaroformato, 
            asistentesinvitados, 
            asistentespresentes, 
            compromisoscrtic,  
            compromisoscontraparte, 
            verificadortipo, 
            tresideas} = req.body;
        let newReunion = await reuniones.create({
            responsablereunion, 
            modalidad, 
            fecha, 
            hora,
            objetivo, 
            minuta, 
            contraparte, 
            lugaroformato, 
            asistentesinvitados, 
            asistentespresentes, 
            compromisoscrtic,  
            compromisoscontraparte, 
            verificadortipo, 
            tresideas
        },{
            fields: [
                'responsablereunion', 
                'modalidad', 
                'fecha', 
                'hora',
                'objetivo', 
                'minuta', 
                'contraparte', 
                'lugaroformato', 
                'asistentesinvitados', 
                'asistentespresentes', 
                'compromisoscrtic',  
                'compromisoscontraparte', 
                'verificadortipo', 
                'tresideas' ]
        });
        res.json({
            resultado: true,
            message: "Reunion creada correctamente",
            reunion: newReunion
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    };
};

export const updateReuniones = async (req, res) => {
    try{
    const {id} = req.params;
        const {responsablereunion, 
            modalidad, 
            fecha, 
            hora,
            objetivo, 
            minuta, 
            contraparte, 
            lugaroformato, 
            asistentesinvitados, 
            asistentespresentes, 
            compromisoscrtic,  
            compromisoscontraparte, 
            verificadortipo, 
            tresideas} =  req.body;
        const reunionUpdate = await reuniones.update({
            responsablereunion, 
            modalidad, 
            fecha, 
            hora,
            objetivo, 
            minuta, 
            contraparte, 
            lugaroformato, 
            asistentesinvitados, 
            asistentespresentes, 
            compromisoscrtic,  
            compromisoscontraparte, 
            verificadortipo, 
            tresideas
        },
        {
            where: {id}
        });
           res.json({
            message: 'Reunión actualizada correctamente',
            resultado: true,
            reunion: reunionUpdate
        });
       }catch(e){
            console.log(e);
            res.json({
                message: "Ha ocurrido un error, porfavor contactese con el administrador", 
                resultado: false
        });
    };
};

export const deleteReuniones = async (req, res) => {
    try{
        const {id} = req.params;
        await reuniones.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Reunion eliminada correctamente',
            resultado: true    
        });
    }catch(e){
            console.log(e);
            res.json({
                message: "Ha ocurrido un error, porfavor contactese con el administrador", 
                resultado: false
            });
        };
};

export const getReunionId = async (req, res) => {
    try{
        const {id} = req.params;
            const reunion = await reuniones.findOne({
                where: {id},
                attributes: [
                    'responsablereunion', 
                    'modalidad', 
                    'fecha', 
                    'hora',
                    'objetivo', 
                    'minuta', 
                    'contraparte', 
                    'lugaroformato', 
                    'asistentesinvitados', 
                    'asistentespresentes', 
                    'compromisoscrtic',  
                    'compromisoscontraparte', 
                    'verificadortipo', 
                    'tresideas']
                    });
            res.json({
                resultado: true,
                message: "Reunion encontrada correctamente",
                reuniones: reunion
            });
        }catch(e){
                console.log(e);
                res.json({
                    message: "Ha ocurrido un error, porfavor contactese con el administrador", 
                    resultado: false
                });
            };
};

export const getAllReuniones = async (req, res) => {
    try{
        const allReuniones = await reuniones.findAll({
            attributes: [
                'id', 
                'responsablereunion', 
                'modalidad', 
                'fecha', 
                'hora',
                'objetivo', 
                'minuta', 
                'contraparte', 
                'lugaroformato', 
                'asistentesinvitados', 
                'asistentespresentes', 
                'compromisoscrtic',  
                'compromisoscontraparte', 
                'verificadortipo', 
                'tresideas'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true,
            message: "Reuniones encontradas correctamente",
            reuniones: allReuniones
        });
    }catch(e){
            console.log(e);
            res.json({
                message: "Ha ocurrido un error, porfavor contactese con el administrador", 
                resultado: false
            });
        };
};