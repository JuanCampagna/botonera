import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';
import express from 'express';
import { buttonsRouter } from './routes/buttons.router.js';
import { connectMongo } from './utils.js';
import session from 'express-session';
import { usersRouter } from './routes/users.router.js';
dotenv.config();

const PORT = process.env.PORT || 8090;
const app = express();

const httpServer = app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`);
});

connectMongo();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors(/* {
//     origin: "http://127.0.0.1:5500",
//     methods: ["GET", "POST", "PUT"],
//   } */)
// );

app.use(
  session({
    store: MongoStore.create({ mongoUrl: process.env.STRINGMONGOCONNECT, ttl: 7200 }),
    secret: process.env.SECRETKEY,
    resave: true,
    saveUninitialized: true,
  })
);

app.use('/api/buttons', buttonsRouter);
app.use('/api/users', usersRouter);

app.get('/*', async (req, res) => {
  return res.status(404).json({ status: 'error', msg: 'no encontrado', data: {} });
});
