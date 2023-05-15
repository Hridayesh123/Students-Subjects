import * as express from "express";
import { Request, Response } from "express";
import * as client from "../config/db_config";

import {
  login,
  verifyToken,
  getSubject,
  getSubjectsById,
  createSubject,
  updateSubject,
  deleteSubject,
  getStudentsById
  
} from "../controllers/Functions";
import * as jwt from "jsonwebtoken";
import { NextFunction } from "connect";
import { AuthenticatedRequest } from "../controllers/Functions";

const router = express.Router();


router.post("/verify", verifyToken);

router.get("/getAll", getSubject);

router.get("/:id",  getSubjectsById);

router.post("/", verifyToken, createSubject);

router.put("/:id", verifyToken, updateSubject);

router.delete("/:id", verifyToken, deleteSubject);

router.get("/student/:id", getStudentsById);
router.get("/", (req, res)=> { res.json("inside router")})



export default router;
