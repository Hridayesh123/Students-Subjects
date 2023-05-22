import * as express from "express";


import {
  login,
  verifyToken,
  getSubject,
  getSubjectsById,
  createSubject,
  updateSubject,
  deleteSubject,
} from "../controllers/Functions";


const router = express.Router();

router.post("/verify", verifyToken);

router.get("/getAll", getSubject);

router.get("/:id", getSubjectsById);

router.post("/", verifyToken, createSubject);

router.put("/:id", verifyToken, updateSubject);

router.delete("/:id", verifyToken, deleteSubject);

router.get("/", (req, res) => {
  res.json("inside router");
});

export default router;
