let express = require("express");
let router = express.Router();

let Repos = require("../../../../../../../../Repository/AdminApi/Utility/Json/FromFolder/FromFile/ScreensFromDisplayJson/Items/Insert");
let Middlewares = require("../../../../../../../../Middlewares/ForRoutes/AdminApi/Utility/Json/FromFolder/FromFile/ScreensFromDisplayJson/Items/Insert")

router.post('/', Middlewares.Insert, (req, res) => {
    let LocalFolderName = req.body.inFolderName;
    let LocalFileName = req.body.inJsonFileName;
    let LocalItemName = req.body.inItemName;

    let LocalDataPK = req.KeshavSoft.DataPk

    Repos.Insert({
        inFolderName: LocalFolderName,
        inFileNameWithExtension: LocalFileName,
        inItemName: LocalItemName,

        inDataPK: LocalDataPK

    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;