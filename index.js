const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const PORT = 5000;
app.use(cors());

const db = require('./Connection/Connection');

const UserRouters = require('./Routers/UserRouters');

app.use('/user', UserRouters);

app.use('/Public/', express.static(__dirname + '/Public'));

app.listen(PORT, () => console.log('API Running on PORT ' + PORT));
