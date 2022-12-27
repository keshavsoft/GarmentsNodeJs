let CommonPullData = require("../../../../Fs/PullData/Reports");
//let TableInfoCheckData = require("../../../../../CommonData/Admin/Config/check");
let TableInfoCheckData = require("../../../../../../../DataSupply/Fs/GeneralFuns/UseKQueryObject/check");

let _ = require("lodash");

let DisplayType = ({ inItemConfig, inColumnPk, inUserPK }) => {
    let LocalTableColumnData = "TableColumns";
    let LocalKey = "DisplayType";

    let LocalDataFromJSON = CommonPullData.PullDataReport({ inUserPK });
    let LocalUpdatedData = JSON.parse(JSON.stringify(LocalDataFromJSON));
    let LocalColumnData = LocalUpdatedData[inItemConfig][LocalTableColumnData];

    LocalTableColumnArray = _.find(LocalColumnData, { pk: parseInt(inColumnPk) });

    if (LocalTableColumnArray.hasOwnProperty(LocalKey)) {
        return LocalTableColumnArray[LocalKey];
    } else {
        return {};
    };
};

let CommonFunc = ({ inReportConfig, inUserPK, inQueryObject }) => {
    let LocalDataFromJSON = CommonPullData.PullDataReport({ inUserPK });
    console.log("CommonFunc : ");
    let LocalTableInfoData;
    LocalTableInfoData = TableInfoCheckData.PullData({ inItemConfig: inReportConfig, inQueryObject, inDisplayData: LocalDataFromJSON });

    return LocalTableInfoData;
};

module.exports = { DisplayType, CommonFunc };
