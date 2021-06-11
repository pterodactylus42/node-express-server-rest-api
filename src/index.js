import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models from './models';
import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware
const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true
}
app.use(cors(corsOptions));

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

app.use((req, res, next) => {
  console.log('making context ...');
  req.context = {
    models,
    me: models.users[3],
  };
  next();
});


app.use(function(req, res, next) {
    console.log('setting headers...');
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json");
  if (req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    return res.status(200).json({});
  }
    next();
});

// * Routes * //

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/lessons', routes.lessons);
app.use('/login', routes.login);
app.use('/pupils', routes.pupils);

// * Start * //

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
