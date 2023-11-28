import { getConnection, querys, sql } from "../models/index.js";

//request: es lo que solicito para ejecutar mi función
//result: es el resultado de mi consulta a la BD

//Create
export const AlumnoInsertar = async (request, result) => {

    //Se desestructura para recibir los valores nombre y apellidos
    const { nombre } = request.body;
    const { apellidos } = request.body;

    try {

        const pool = await getConnection();

        const resultAlumno = await pool
        .request()
        .input("nombreValor", sql.NVarChar , nombre)
        .input("apellidosValor", sql.NVarChar, apellidos)
        .query(querys.AlumnoInsertar);

        return result.json(
            {
                "respuesta": "alumno creado correctamente",
                nombre,
                apellidos
            }
        )
        
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }
    






}

//Read simple
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

//Función de practica Read simple para Cursos
export const getCursos = async (request, result) => {

    try {

        const pool = await getConnection();

        const resultCursos = await pool
        .request()
        .query(querys.getCursos);

        result.json(resultCursos.recordset)
  
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }

}

//Función de practica Read simple para Matricula
export const getMatricula = async (request, result) => {

    try {

        const pool = await getConnection();

        const resultMatricula = await pool
        .request()
        .query(querys.getMatricula);

        result.json(resultMatricula.recordset)
  
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }

}


//Read con parametro
export const getAlumnoById = async (request, result) => {

    try {

        //console.log("\n valor recibido en la URL: " + request.params.idRecibido + "\n");

        const pool = await getConnection();

        const resultAlumnos = await pool
        .request()
        .input("idValor", request.params.idRecibido)
        .query(querys.getAlumnoById);

        return result.json(resultAlumnos.recordset[0]);
        
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }


}

//Read con parametro de practica para cursos
export const getCursoById = async (request, result) => {

    try {

        //console.log("\n valor recibido en la URL: " + request.params.idRecibido + "\n");

        const pool = await getConnection();

        const resultCurso = await pool
        .request()
        .input("idValor", request.params.idRecibido)
        .query(querys.getCursoById);

        return result.json(resultCurso.recordset[0]);
        
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }


}

//Read con parametro de practica para matricula
export const getMatriculaById = async (request, result) => {

    try {

        //console.log("\n valor recibido en la URL: " + request.params.idRecibido + "\n");

        const pool = await getConnection();

        const resultMatricula = await pool
        .request()
        .input("idValor", request.params.idRecibido)
        .query(querys.getMatriculaById);

        return result.json(resultMatricula.recordset[0]);
        
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }


}