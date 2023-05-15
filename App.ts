import * as express from 'express';
import * as bodyParser from 'body-parser';
import subjectRoutes from './routes/subjectRoutes';
import userRoutes from './routes/userRoutes';
import { Server } from 'http';
import * as jwt from 'jsonwebtoken';
import { seq } from './models/models';

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRoutes);
app.use('/subject', subjectRoutes);

const server: Server = app.listen(port, async () => {
// await seq.sync({alter: true});
    console.log(`Server is running on port ${port}`);
});

export default server;