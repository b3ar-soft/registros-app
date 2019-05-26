const app = require('express')();
const fileUpload = require('express-fileupload');
const server = require('http').Server(app);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const template = require('./templates/template.js');
const upload = require('./upload.js');
const registryRoutes = require('./routes/registry.routes');

app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

server.listen(3000);
mongoose.connect('mongodb://localhost/registros-app');

app.get('/template', template.get);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', upload.post);
app.use('/registry', registryRoutes);
