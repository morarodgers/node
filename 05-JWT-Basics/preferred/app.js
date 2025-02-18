require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const myRouter = require('./routes/main')

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', myRouter)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
