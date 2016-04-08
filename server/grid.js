
module.exports = function(req, res) {
    // streaming to gridfs
    //filename to store in mongodb
    var writestream = gfs.createWriteStream({
        filename: req.files.displayImage.name
    });

    fs.createReadStream(req.files.displayImage.path).pipe(writestream);

    writestream.on('close', function (file) {
        // do something with `file`
        console.log('Photo written To DB');
        res.redirect("back");
    });
};




