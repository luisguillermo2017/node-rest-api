export const querys = {

    //CRUD

    //C
    AlumnoInsertar:
    "exec sp_alumno_insertar @nombre = @nombreValor, @apellidos = @apellidosValor",


    //Read simple
    getAlumnos: 
    "select * from view_alumnos",

    //Read simple de practica para cursos
    getCursos:
    "select * from view_cursos",

    //read simple de practica para matricula
    getMatricula:
    "select * from view_matricula",


    //Read con parametro
    getAlumnoById:
    "exec sp_alumno_by_id @id = @idValor",

    //Read con parametro de practica para cursos
    getCursoById:
    "exec sp_cursos_by_id @id = @idValor",

    //Read con parametro de practica para Matricula
    getMatriculaById:
    "exec sp_matricula_by_id @id = @idValor",


    //U


    //D

}