let Repos = require("../../../../../Repository/AdminApi/Utility/Json/FirmDetails/FromMsSql");

let PostFunc = async (req, res, next) => {
    let LocalBody = req.body;

    let FirmName = LocalBody.FirmName;
    let FromDate = LocalBody.FromDate;

    let ToDate = LocalBody.ToDate;
    let AssYear = LocalBody.AssYear;
    let FinYear = LocalBody.FinYear;
    let PAN = LocalBody.PAN;
    let GST = LocalBody.GST;
    let LocalDataPK = req.KeshavSoft.DataPk;
    //console.log("LocalBody : ", req.KeshavSoft, FirmName, LocalBody);

    Repos.PostFunc({
        FirmName,
        FromDate,
        ToDate,
        AssYear,
        FinYear,
        PAN,
        GST,
        inDataPK: LocalDataPK
    });

    // Repos.Bulk({
    //     inFolderName: LocalFolderName,
    //     inBody: LocalBody,
    //     inUserPK: req.KeshavSoft.DataPk
    // }).then(PromiseData => {
    //     res.json(PromiseData);
    // }).catch(PromiseError => {
    //     res.end(JSON.stringify(PromiseError));
    // });

    res.json({});
};

module.exports = { PostFunc };