import express from 'express';

const app = express();

app.get('/test', (__: express.Request, res: express.Response) => {
    res.status(200).send('Servidor ta de pé');
})

app.listen(3006, () => {
    console.log('Servidor rodando na porta 3000')
})