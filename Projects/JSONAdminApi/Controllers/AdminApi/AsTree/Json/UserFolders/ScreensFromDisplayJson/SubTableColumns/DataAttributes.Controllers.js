let Repos = require("../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/DataAttributes");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk

    });
    res.json(LocalFromRepo);

};

let Update = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;
    console.log("ssssssss",LocalDataPk);

    let jVarLocalfolderName = req.body.FolderName;
    let jVarLocalFileName = req.body.FileName;
    let jVarLocalItemName = req.body.ItemName;
    let jVarLocalScreenName = req.body.ScreenName;
    let jVarLocalDataAttribute = req.body.DataAttribute;
    let localUpdateBodyAsJson = req.body.BodyAsJson;

    let LocalFromRepo = await Repos.Update({
        DataPK: LocalDataPk,
        FolderName: jVarLocalfolderName,
        FileName: jVarLocalFileName,
        ItemName: jVarLocalItemName,
        ScreenName: jVarLocalScreenName,
        DataAttribute: jVarLocalDataAttribute,
        BodyAsJson: localUpdateBodyAsJson
    });
    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};


module.exports = { GetFuncs, Update };