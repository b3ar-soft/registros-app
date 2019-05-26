const Registry = require('../models/registry');

class RegistryController {
    getAllRegistry(req, res) {
        Registry.find((err, data) => {
            if(err){
                res.status(404).send(`Problem when looking for the record with the registrys`);
            } 
            res.status(200).send({ data: data, message: "ok"});
        });
    }

    getRegistryById(req, res) {
        const id = req.params.id;
        Registry.findById(id, (err, data) => {
            if(err){
                res.status(404).send(`Problem when looking for the record with the id: ${id}`);
            }
            res.status(200).send({ data: data, message: "ok"});
        });
    }

    updateRegistryById(req, res) {
        const id = req.params.id;
        const registryUpdated = req.body;

        Registry.findByIdAndUpdate(id, {$set: registryUpdated}, (err, data) => {
            if(err){
                res.status(404).send(`Problem with update the record with the id: ${id}`);
            }
            res.status(200).send({ data: data, message: "ok"});
        });
    }

    deleteRegistry(req, res) {
        const id = req.params.id;

        Registry.findByIdAndRemove(id, (err, data) => {
            if(err){
                res.status(404).send(`Problem with delete the record with the id: ${id}`);
            }
        });
        res.status(200).send({ data: '', message: "Deleted Successfully"});
    }

    testController(req, res) {
        res.send("reistry test controller");
    }
}


module.exports = new RegistryController();