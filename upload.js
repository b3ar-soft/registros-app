const csv = require('fast-csv');
const mongoose = require('mongoose');
const Registry = require('./models/registry');

exports.post = function(req, res) {
    if(!req.files)
        return res.status(400).send('No files were uploaded.');
    
    const registryFile = req.files.file;

    let registrys = [];

    csv.fromString(registryFile.data.toString(), {
        headers: true,
        ignoreEmpty: true
    }).on("data", (data) => {
        data['_id'] = new mongoose.Types.ObjectId();
        registrys.push(data);
    }).on("end", () => {
        Registry.create(registrys, (err, documents) => {
            if(err) throw err
        });

        res.send(registrys.length + ' registrys have been successfully uploaded');
    });
}