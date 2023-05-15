import * as express from 'express';
import { login } from '../controllers/Functions';
import { addStudentMarks } from '../controllers/Functions';

const router = express.Router();


router.post("/login", login);

router.put("/students/:id", addStudentMarks);

export default router;