import { Router, Request, Response } from 'express';
import { getCache, saveCache } from '../controllers/cache'

const router = Router();


router.get('/test', (__: Request, res: Response) => {
    res.status(200).send('Servidor ta de pé');
})

router.post('/save/cache', (req: Request, res: Response) => {
    console.log(req.body)
    saveCache(req.body.key, req.body.data);
    return res.status(201).send('info save')
})

router.get('/cache', async (req: Request, res: Response) => {
    const result = await getCache(String(req.query.key));
    return res.status(200).send(result);
})



export default router;