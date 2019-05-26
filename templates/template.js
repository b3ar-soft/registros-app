var json2csv, { Parser } = require('json2csv');

exports.get = function (req, res) {
    const fields = [
        'name.firstName',
        'name.lastName',
        'cum',
        'group',
        'section'
    ];

    const csv = new Parser({ data: '', fields: fields });

    res.set("Content-Disposition", "attachment;filename=registry.csv");
    res.set("Content-Type", "application/octet-stream");

    res.send(csv.parse());
};
