import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { UserRoute } from './modules/users/user.roter';

// parsers
app.use(express.json());
app.use(cors());

app.use('/api', UserRoute);

app.get('/', (req: Request, res: Response) => {
  res.send(`Hello World!`);
});

export default app;
