let express = require("express");
let router = express.Router();
let Repos = require("../../../../../../../Repository/AdminApi/Utility/Json/Folder/ForTableInfo/SearchRowArray/Search");

router.get('/', (req, res, next) => {
    let LocalUserPk = req.KeshavSoft.DataPk;
    // console.log("LocalUserPk:",LocalUserPk);

    Repos.Search({inUserPK:LocalUserPk}).then(PromiseData=>{
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;