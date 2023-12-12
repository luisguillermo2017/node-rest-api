export const querys = {

    //CRUD

    //C
    AlumnoInsertar:
    "exec sp_alumno_insertar @nombre = @nombreValor, @apellidos = @apellidosValor",

    //Create de practica para cursos
    CursoInsertar:
    "exec sp_curso_insertar @nombre = @nombreValor, @descripcion = @descripcionValor",


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
    Alumno_Actualizar:
    "exec sp_alumno_actualizar @nombre = @nombreValor, @apellidos = @apellidosValor, @id = @idValor",

    //Update de practica para Curso
    Curso_Actualizar:
    "exec sp_curso_Actualizar @nombre = @nombreValor, @descripcion = @descripcionValor, @id = @idValor",

    //D
    Alumno_Borrar:
    "exec sp_alumno_borrar @id = @idValor",

    //Delete de practica para Curso
    Curso_Borrar:
    "exec sp_curso_borrar @id = @idValor"


}