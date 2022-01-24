import clases from "../models/clases";

export const createClases = async (req, res) =>{
    try{
        const{
            rut,
            nombre,
            apellido,
            fecha,
            estudiantesinscritos,
            estudiantesasistentes
        }=req.body
        let newClases= await clases.create({
            rut,
            nombre,
            apellido,
            fecha,
            estudiantesinscritos,
            estudiantesasistentes
        },{
            fields:[
            'rut',
            'nombre',
            'apellido',
            'fecha',
            'estudiantesinscritos',
            'estudiantesasistentes' 
        ]
        });
        res.json({
            resultado: true,
            message: "Clase ingresada correctamente",
            clase: newClases
        });

    }catch(e){
        console.log(e);
        res.json({
            message:"Ha ocurrido un error, porfavor contactese con el administrador",
            resultado: false
        });

    };
};

export const updateClases = async (req, res) =>{
    try{
        const {id} =req.params;
        const{
            rut,
            nombre,
            apellido,
            fecha,
            estudiantesinscritos,
            estudiantesasistentes
        } =req.body;
        const clasesUpdate = await clases.update({
            rut,
            nombre,
            apellido,
            fecha,
            estudiantesinscritos,
            estudiantesasistentes
        },{
            where:{id}
        });
        res.json({
            message: 'Clase actualizada correctamente',
            resultado: true
        });
    }catch(e){
        console.log(e);
        res.json({
            message:"Ha ocurrido un error, porfavor contactese con el administrador",
            resultado: false
        });
    }
};

export const deleteClases = async (req, res) =>{
    try{
        const {id} = req.params;
        await clases.destroy({
            where: {
                id
            }
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    };
};

export const getClaseId= async (req,res) =>{
    try{
        const {id} = req.params;
        const clase = await clases.findeOne({
            where: {id},
            attributes:[
                'rut',
                'nombre',
                'apellido',
                'fecha',
                'estudiantesinscritos',
                'estudiantesasistentes' 
            ]
        });
        res.json({
            resultado: true,
            message: "Clase encontrada correctamente",
            clases:clase
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    };
};
export const getAllClases = async(req, res) =>{
    try{
        const allClases = await clases.findAll({
            attributes:[
                'id',
                'rut',
                'nombre',
                'apellido',
                'fecha',
                'estudiantesinscritos',
                'estudiantesasistentes' 
            ],
            order:[
                ['id', 'DESC']
            ]
        });
        res.json({
            resultado: true,
            message:"Clases encontradas correctamente",
            clases: allClases
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error, porfavor contactese con el administrador", 
            resultado: false
        });
    };
};