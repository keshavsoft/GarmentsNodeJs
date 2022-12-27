let express = require('express');
let router = express.Router();
let Repos = require("../../../../../../../../../Repository/AdminApi/Utility/Json/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/Insert");
let Middleware=require("../../../../../../../../../Middlewares/ForRoutes/AdminApi/Utility/Json/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/Insert")

router.post('/',Middleware.Insert, (req, res) => {
    let LocalFolderName = req.body.inFolderName;
    let LocalJsonFileName = req.body.inJsonFileName;
    let LocalItemName = req.body.inItemName;
    let LocalScreenName = req.body.inScreenName
    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.Insert({
        inJsonConfig: { inFolderName: LocalFolderName, inJsonFileName: LocalJsonFileName },
        inItemName: LocalItemName,
        inScreenName: LocalScreenName,
        inDataPK: LocalDataPK
    }).then(PromiseData => {
        res.json(PromiseData);
    });
});

module.exports = router;
