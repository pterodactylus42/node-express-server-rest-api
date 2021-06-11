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
  return res.send(Object.values(req.context.models.lessons));
});

router.get('/:lessonId', cors(corsOptions), (req, res) => {
  return res.send(req.context.models.lessons[req.params.lessonId]);
});

router.post('/', cors(corsOptions), (req, res) => {
  const id = uuidv4();
  // todo: add lesson fields
  const lesson = {
    id,
    name: req.body.name,
    frequency: req.body.frequency,
    date: req.body.date,
    duration: req.body.duration, 
    venue: req.body.venue,
    pupils: req.body.pupils
  };

  req.context.models.lessons[id] = lesson;

  return res.send(lesson);
});

// todo: make delete requests work
router.delete('/:lessonId', cors(corsOptions), (req, res) => {
  var now = new Date();
  console.log('enter delete mode ' + now);
  console.log(req.params.lessonId);

//  const {
//    [req.params.lessonId]: lesson,
//    ...otherMessages
//  } = req.context.models.lessons;

//  req.context.models.lessons = otherMessages;
  return res.status(200).json({ errorCode : null , errorMessage : null , users : [] });
  //return res.send(req.context.models.lessons[req.params.lessonId]);
});

export default router;
