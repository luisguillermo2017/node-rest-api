import { Router } from "express";

import { getAlumnos,
        getCursos,
        getMatricula,
        getAlumnoById,
        getCursoById,
        getMatriculaById,
        AlumnoInsertar,
        CursoInsertar,
        Alumno_Actualizar,
        Curso_Actualizar,
        Alumno_Borrar_By_Id,
        Curso_Borrar_By_Id
    } from "../controllers/alumnos.controller.js";

const router = Router();

//CRUD

//C
router.post("/alumnos/AlumnoInsertar", AlumnoInsertar);

//Create de practica para cursos
router.post("/alumnos/CursoInsertar", CursoInsertar);

//Read simple
router.get("/alumnos/getAlumnos", getAlumnos);

//Read simple de practica para cursos
router.get("/alumnos/getCursos",getCursos );

//Read simple de practica para Matricula
router.get("/alumnos/getMatricula", getMatricula);

//Read con parametro
router.get("/alumnos/getAlumnoById/:idRecibido", getAlumnoById);

//Read con parametro de practica para cursos
router.get("/alumnos/getCursoById/:idRecibido", getCursoById);

//Read con parametro de practica para matricula
router.get("/alumnos/getMatriculaById/:idRecibido", getMatriculaById);

//U
router.put("/alumnos/AlumnoActualizar/:idRecibido", Alumno_Actualizar);

//Update de practica para Curso
router.put("/alumnos/CursoActualizar/:idRecibido", Curso_Actualizar);

//D
router.delete("/alumnos/Alumno_Borrar_By_Id/:idRecibido", Alumno_Borrar_By_Id);

//Delete de practica para Curso
router.delete("/alumnos/Curso_Borrar_By_Id/:idRecibido", Curso_Borrar_By_Id)

export default router;