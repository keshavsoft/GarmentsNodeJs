let express = require('express');
let router = express.Router();

let Repos = require("../../../../../../../../../../Repository/AdminApi/Utility/Json/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/Columns/Insert");
let Middleware = require("../../../../../../../../../../Middlewares/ForRoutes/AdminApi/Utility/Json/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/Columns/Insert")

router.post('/', Middleware.Insert, (req, res) => {
    
    let LocalFolderName = req.body.inFolderName;
    let LocalFileName = req.body.inJsonFileName;
    let LocalItemName = req.body.inItemName;
    let LocalScreenName = req.body.inScreenName;
    let LocalColumnName = req.body.inColumnName;

    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalinJsonConfig = { inFolderName: LocalFolderName, inJsonFileName: LocalFileName };
    let LocalinItemConfig = { inItemName: LocalItemName, inScreenName: LocalScreenName }

    Repos.Insert({
        inJsonConfig: LocalinJsonConfig,
        inItemConfig: LocalinItemConfig,
        inColumnName: LocalColumnName,
        inDataPK: LocalDataPk
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    })
});

module.exports = router;