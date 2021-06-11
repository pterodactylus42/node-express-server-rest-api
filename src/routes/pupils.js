import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
import cors from 'cors';

const router = Router();

var corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


router.get('/', cors(corsOptions), (req, res) => {
  return res.send(Object.values(req.context.models.pupils));
});

router.get('/:pupilId', cors(corsOptions), (req, res) => {
  return res.send(req.context.models.pupils[req.params.pupilId]);
});

router.post('/', cors(corsOptions), (req, res) => {
  const id = uuidv4();

  const pupil = {
    id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    created: req.body.created,
    works: req.body.works,
  };

  req.context.models.pupils[id] = pupil;

  return res.send(pupil);
});

// todo: make delete requests work
router.delete('/:pupilId', cors(corsOptions), (req, res) => {
  console.log(req.params.pupilId);

  return res.send(req.context.models.pupils[req.params.pupilId]);
});

export default router;
