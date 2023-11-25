import { getConnection, querys, sql } from "../models/index.js";

//request: es lo que solicito para ejecutar mi función
//result: es el resultado de mi consulta a la BD

export const getAlumnos = async (request, result) => {

    try {

        const pool = await getConnection();

        const resultAlumnos = await pool
        .request()
        .query(querys.getAlumnos);

        result.json(resultAlumnos.recordset)
  
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }

}