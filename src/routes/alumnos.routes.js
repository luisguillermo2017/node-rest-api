import { Router } from "express";

import { getAlumnos } from "../controllers/alumnos.controller.js";

const router = Router();

//CRUD

//C

//Read simple
router.get("/alumnos/getAlumnos", getAlumnos);

//Read con parametro

//U

//D


export default router;