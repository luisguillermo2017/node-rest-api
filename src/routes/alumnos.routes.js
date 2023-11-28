import { Router } from "express";

import { getAlumnos,
        getCursos,
        getMatricula,
        getAlumnoById,
        getCursoById,
        getMatriculaById,
        AlumnoInsertar
    } from "../controllers/alumnos.controller.js";

const router = Router();

//CRUD

//C
router.post("/alumnos/AlumnoInsertar", AlumnoInsertar);

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

//D

export default router;