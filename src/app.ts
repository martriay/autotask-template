import express from 'express';
import cors from 'cors';
import { handler } from './foo';

const PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors());

require('dotenv').config();

type EnvInfo = {
  DEFENDER_API_KEY: string;
  DEFENDER_API_SECRET: string;
  MY_SECRET: string;
}

const {
  DEFENDER_API_KEY: apiKey,
  DEFENDER_API_SECRET: apiSecret,
  MY_SECRET: mySecret,
} = process.env as EnvInfo;

app.get('/', (req, res) => res.send('Autotask Dev Server'));

app.post('/foo', async (request, res) => {
  const event = {
    apiKey,
    apiSecret,
    request: { body: request.body},
    secrets: { mySecret }
  };

  return res.send({
    result: JSON.stringify(await handler(event))
  });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
