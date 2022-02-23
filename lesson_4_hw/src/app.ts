import express, { Request, Response } from 'express';

import { port } from './config';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send();
});

app.listen(port, () => {
    console.log('Server has started!!!');
});
