import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import routes from './src/routes/todo.routes';
import connectionString from './config/index';

const app = express();
const PORT = 3002;

// mongoose connection
mongoose.connect(connectionString()).then(() => {
    console.log("Successfully connected to the database")
  }).catch(error => {
    console.log("Could not connect to the database. Exiting now. " + error);
    process.exit();
  });

// body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// app.use(express.static('public')); For serving static files in public folder

app.get('/api', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);

