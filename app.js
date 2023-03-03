import express from 'express';
import http from 'http';

import messageRoute from './src/routes/messageRoute';

const app = express();

const serveHttp = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', messageRoute);

serveHttp.listen('3001', () => {
  console.log('http://localhost:300');
});
