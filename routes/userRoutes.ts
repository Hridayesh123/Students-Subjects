import * as express from 'express';
import { login } from '../controllers/Functions';
import { addStudentMarks, getStudentsById, generateResult } from '../controllers/Functions';

const router = express.Router();


router.post("/login", login);

router.get("/student/:id", getStudentsById);

router.put("/students/:id", addStudentMarks);

router.get("/students/:id/results",generateResult);

export default router;