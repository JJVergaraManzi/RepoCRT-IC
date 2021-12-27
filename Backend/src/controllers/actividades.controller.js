import actividades from '../models/actividades';

export const createActividades = async (req, res) => {
    try{
        const {
            responsableactividad,
            objetivoestr,
            descripcionact,
            publicoobj,
            contraparteact,
            mecanismoconv,
            lugar,
            costototal,
            aportesolic,
            indicadoresmed,
            proccompr,
            tipoverific,
            fecha} = req.body;
        let newActividad = await actividades.create({
            responsableactividad,
            objetivoestr,
            descripcionact,
            publicoobj,
            contraparteact,
            mecanismoconv,
            lugar,
            costototal,
            aportesolic,
            indicadoresmed,
            proccompr,
            tipoverific,
            fecha
        },{
            fields: [
                'responsableactividad',
                'objetivoestr',
                'descripcionact',
                'publicoobj',
                'contraparteact',
                'mecanismoconv',
                'lugar',
                'costototal',
                'aportesolic',
                'indicadoresmed',
                'proccompr',
                'tipoverific',
                'fecha' ]
        });
        res.json({
            resultado: true,
            message: "Actividad creada correctamente",
            actividad: newActividad
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    };
};

export const updateActividades = async (req, res) => {
    try{
    const {id} = req.params;
        const {responsableactividad,
            objetivoestr,
            descripcionact,
            publicoobj,
            contraparteact,
            mecanismoconv,
            lugar,
            costototal,
            aportesolic,
            indicadoresmed,
            proccompr,
            tipoverific,
            fecha} =  req.body;
        const actividadUpdate = await actividades.update({
            responsableactividad,
            objetivoestr,
            descripcionact,
            publicoobj,
            contraparteact,
            mecanismoconv,
            lugar,
            costototal,
            aportesolic,
            indicadoresmed,
            proccompr,
            tipoverific,
            fecha
        },
        {
            where: {id}
        });
           res.json({
            message: 'Actividad actualizada correctamente',
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

export const deleteActividades = async (req, res) => {
    try{
        const {id} = req.params;
        await actividades.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Actividad eliminada correctamente',
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

export const getActividadId = async (req, res) => {
    try{
        const {id} = req.params;
            const actividad = await actividades.findOne({
                where: {id},
                attributes: [
                    'responsableactividad',
                    'objetivoestr',
                    'descripcionact',
                    'publicoobj',
                    'contraparteact',
                    'mecanismoconv',
                    'lugar',
                    'costototal',
                    'aportesolic',
                    'indicadoresmed',
                    'proccompr',
                    'tipoverific',
                    'fecha']
                    });
            res.json({
                resultado: true,
                message: "Actividad encontrada correctamente",
                actividades: actividad
            });
        }catch(e){
                console.log(e);
                res.json({
                    message: "Ha ocurrido un error, porfavor contactese con el administrador", 
                    resultado: false
                });
            };
};

export const getAllActividades = async (req, res) => {
    try{
        const allActividades = await actividades.findAll({
            attributes: [
                'id', 
                'responsableactividad',
                'objetivoestr',
                'descripcionact',
                'publicoobj',
                'contraparteact',
                'mecanismoconv',
                'lugar',
                'costototal',
                'aportesolic',
                'indicadoresmed',
                'proccompr',
                'tipoverific',
                'fecha'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true,
            message: "Actividades encontradas correctamente",
            actividades: allActividades
        });
    }catch(e){
            console.log(e);
            res.json({
                message: "Ha ocurrido un error, porfavor contactese con el administrador", 
                resultado: false
            });
        };
};