let express = require("express");
let router = express.Router();

let Repos = require("../../../../../Repository/AdminApi/Utility/Json/FromFolder/Insert");
let Middleware = require("../../../../../Middlewares/ForRoutes/AdminApi/Utility/Json/FromFolder/Insert");

router.post('/', Middleware.Insert, (req, res) => {
    let LocalFolderName = req.body.inFolderName;

    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.OnlyFolder({
        inFolderName: LocalFolderName,
        inDataPK: LocalDataPK
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();
});

module.exports = router;