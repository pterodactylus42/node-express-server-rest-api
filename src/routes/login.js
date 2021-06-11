import { Router } from 'express';
import cors from 'cors';

const router = Router();

var corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.post('/', cors(corsOptions), (req, res) => {

    console.log('login tried');

    return res.status(200).send('got a login request');
  });


export default router;
