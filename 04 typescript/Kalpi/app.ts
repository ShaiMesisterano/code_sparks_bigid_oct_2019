import express from 'express';
import uuid from 'uuid';
import bodyParser from 'body-parser';
import { parties } from './data/parties';

const port = 5000;

const app: express.Application = express();

app.use(bodyParser.json());

app.get('/api/parties', (request: express.Request, response: express.Response) => response.json(parties));

for (let i=0; i<5000000000; i++){}

app.listen(port, () => console.log(`Server is running on port ${port}`));