import express from 'express';

import routers from './routers';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(routers);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})