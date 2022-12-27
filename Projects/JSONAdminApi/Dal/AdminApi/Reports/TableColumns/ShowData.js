let _ = require("lodash");
let debug = require("debug")("KS16");
//let CommonPullDataReports = require("../../../../CommonData/Fs/PullData/Reports");
let GlobalUserNameToPK = require("../../../../CommonData/Users/NameToPK");
let CommonDataDisplayType = require("../../../../CommonData/Admin/Reports/LedgerAuto/TableColumns/ShowData");
let GlobalCommonData = require("../../../../CommonData/Admin/Reports/LedgerAuto/TableColumns/ShowData");
let CommonPullDataReports = require("../../../../CommonData/Fs/PullData/Reports");

let ColumnData = ({ inJsonConfig, inReportConfig, inUserName, inQueryObject, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        let LocalReturnObject = GlobalCommonData.CommonFunc({ inJsonConfig, inReportConfig, inUserPK: LocalUserPK, inQueryObject });

        callback(LocalReturnObject, null);
    };
};

let ColumnData1 = ({ inItemConfig, inColumnPk, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {

        let LocalJsonConfig = {
            inFolderName: "Reports",
            inFileName: "LedgerAuto.json"
        };

        let LocalTableColumnData = "TableColumns";


        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig: LocalJsonConfig, inUserPK: LocalUserPK });

        LocalColumnData = LocalDataFromJSON[inItemConfig][LocalTableColumnData];
        LocalTableColumnArray = _.find(LocalColumnData, { pk: parseInt(inColumnPk) });
        debug("LocalTableColumnArray", LocalTableColumnArray);

        callback(LocalTableColumnArray, null);

    };
};

let KDataset = ({ inItemConfig, inColumnPk, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {

        let LocalJsonConfig = {
            inFolderName: "Reports",
            inFileName: "LedgerAuto.json"
        };
        let LocalTableColumnData = "TableColumns";

        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig: LocalJsonConfig, inUserPK: LocalUserPK });

        LocalColumnData = LocalDataFromJSON[inItemConfig][LocalTableColumnData];
        LocalTableColumnArray = _.find(LocalColumnData, { pk: parseInt(inColumnPk) });
        let LocalData = LocalTableColumnArray.KDataset;

        callback(LocalData, null);

    };
};

let KDatasetSavecheck = ({ inItemConfig, inColumnPk, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {

        let LocalJsonConfig = {
            inFolderName: "Reports",
            inFileName: "LedgerAuto.json"
        };
        let LocalTableColumnData = "TableColumns";

        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig: LocalJsonConfig, inUserPK: LocalUserPK });

        LocalColumnData = LocalDataFromJSON[inItemConfig][LocalTableColumnData];
        LocalTableColumnArray = _.find(LocalColumnData, { pk: parseInt(inColumnPk) });
        let LocalData = LocalTableColumnArray.KDataset.SaveCheck;

        callback(LocalData, null);

    };
};

let DisplayType = ({ inItemConfig, inColumnPk, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    let LocalReturnData;

    if (LocalUserPK > 0) {
        LocalReturnData = CommonDataDisplayType.DisplayType({ inItemConfig, inColumnPk, inUserPK: LocalUserPK });
        callback(LocalReturnData, null);
    };
};


let DisplayType1 = ({ inItemConfig, inColumnPk, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {

        let LocalJsonConfig = {
            inFolderName: "Reports",
            inFileName: "LedgerAuto.json"
        };

        let LocalTableColumnData = "TableColumns";

        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig: LocalJsonConfig, inUserPK: LocalUserPK });

        LocalColumnData = LocalDataFromJSON[inItemConfig][LocalTableColumnData];
        LocalTableColumnArray = _.find(LocalColumnData, { pk: parseInt(inColumnPk) });
        let LocalData = LocalTableColumnArray.DisplayType;

        console.log("LocalTableColumnArray", LocalTableColumnArray.DisplayType);
        debug("LocalTableColumnArray", LocalTableColumnArray);

        callback(LocalData, null);

    };
};

module.exports = { ColumnData, KDataset, KDatasetSavecheck, DisplayType };
// , KDatasetSavecheck, , KDatasetSaveCheckMasters, ParentClasses, Widths, HtmlAttributes