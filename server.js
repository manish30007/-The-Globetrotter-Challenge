

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',require('./Backend/services/data.service'));
app.use('/game',require('./Backend/controller/game.controller'));
app.use('/user',require('./Backend/controller/user.controller'));

app.get("/", function(req, res){
    res.send("Your server is up and running");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));