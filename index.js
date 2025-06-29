require('dotenv').config();

const express = require('express');

const cors = require('cors');

const app = express();

const port = process.env.PORT;

const mainRoutes = require('./src/routes/mainRoutes');

app.use(express.json());

app.use(cors());

app.get('/', mainRoutes);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})