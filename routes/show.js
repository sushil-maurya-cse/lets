const router = require('express').Router();
const File = require('../models/file');

router.get('/:uuid',async(req,res) => {                                                                                           //:semicolon means dynamic parameter hai
    try{
    const file=await File.findOne({uuid: req.params.uuid});
    if(!file){
        return res.render('download',{error: 'Oh Shit..Link Expired sorry...'});
    }


    return res.render('download',{
        uuid: file.uuid,
        fileName: file.filename,
        fileSize: file.size,
        downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
    })
} catch(err) {
    return res.render('download',{error: 'Oh Shit..there is a problem'});
}
})                                                   



module.exports = router;