
let _ = require("lodash");
let debug = require("debug")("KS2");
const path = require('path');

let GlobalUserNameToPK = require("../../../CommonData/Users/NameToPK");
let GlobalCommonData = require("../../../CommonData/Fs/PullData/Show");
let CommonPullDataReports = require("../../../CommonData/Fs/PullData/Reports");

let ShowNames = ({ inJsonConfig, inItemConfig, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    console.log("inUserName : ", inUserName);
    if (LocalUserPK > 0) {
        let LocalData;
        let LocalScreensData;

        let LocalItemName = inItemConfig.inItemName;

        let LocalDataFromJSON = GlobalCommonData.PullData({ inJsonConfig, inUserPK: LocalUserPK });
        let LocalDataFromJSONObject = JSON.parse(LocalDataFromJSON);

        LocalScreensData = _.get(LocalDataFromJSONObject, `${LocalItemName}.VouchersConsider`);

        console.log(" LocalScreensData", inJsonConfig, inItemConfig);

        LocalData = LocalScreensData.map((LoopItem) => {
            return [LoopItem.pk, LoopItem.ItemName]
        });

        //console.log("LocalScreensData :LocalData ", LocalScreensData, LocalData);
        callback(LocalData, null);
    };
};

let ShowItemNames = ({ inJsonConfig, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });

    if (LocalUserPK > 0) {
        let LocalData;

        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig, inUserPK: LocalUserPK });

        LocalData = Object.keys(LocalDataFromJSON);

        callback(LocalData, null);
    };
};

let VouchersConsider = ({ inReportName, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });

    if (LocalUserPK > 0) {
        let LocalData;
        let LocalScreensData;

        //  let LocalItemName = inItemConfig.inItemName;

        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inUserPK: LocalUserPK });

        LocalScreensData = _.get(LocalDataFromJSON, `${inReportName}.VouchersConsider`);

        LocalData = LocalScreensData.map((LoopItem) => {
            return [LoopItem.pk, LoopItem.ItemName]
        });

        //console.log("LocalScreensData :LocalData ", LocalScreensData, LocalData);
        callback(LocalData, null);
    };
};

let Columns = ({ inJsonConfig, inReportConfig, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });

    if (LocalUserPK > 0) {
        let LocalData;
        let LocalVouchersConsiderArray;
        let LocalVouchersConsiderFindObject;
        let LocalVouchersConsider = "VouchersConsider";
        let LocalVouchersConsiderFilterObject = { pk: 0 };
        let LocalReportName = inReportConfig.inReportName;
        let LocalPkName = inReportConfig.inPkName;
        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig, inUserPK: LocalUserPK });

        LocalVouchersConsiderArray = LocalDataFromJSON[LocalReportName][LocalVouchersConsider];
        LocalVouchersConsiderFilterObject.pk = parseInt(LocalPkName);
        LocalVouchersConsiderFindObject = _.find(LocalVouchersConsiderArray, LocalVouchersConsiderFilterObject);
        //console.log(" LocalScreensData", LocalVouchersConsiderFindObject.Columns);

        LocalData = LocalVouchersConsiderFindObject.Columns.map((LoopItem) => {
            return [LoopItem.pk, LoopItem.Name];
        });

        callback(LocalData, null);
    };
};

let JoinTables = ({ inJsonConfig, inReportConfig, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });

    if (LocalUserPK > 0) {
        let LocalData;
        let LocalVouchersConsiderArray;
        let LocalVouchersConsiderFindObject;
        let LocalVouchersConsider = "VouchersConsider";
        let LocalVouchersConsiderFilterObject = { pk: 0 };
        let LocalReportName = inReportConfig.inReportName;
        let LocalPkName = inReportConfig.inPkName;

        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig, inUserPK: LocalUserPK });

        LocalVouchersConsiderArray = LocalDataFromJSON[LocalReportName][LocalVouchersConsider];
        LocalVouchersConsiderFilterObject.pk = parseInt(LocalPkName);
        LocalVouchersConsiderFindObject = _.find(LocalVouchersConsiderArray, LocalVouchersConsiderFilterObject);

        LocalJoinTablesData = LocalVouchersConsiderFindObject.JoinTables[0];
        console.log(" LocalJoinTablesData", LocalJoinTablesData);

        LocalData = Object.keys(LocalJoinTablesData);
        console.log(" LocalData", LocalData);

        //console.log("LocalScreensData :LocalData ", LocalScreensData, LocalData);
        callback(LocalData, null);
    };
};
let JoinTablesColumns = ({ inJsonConfig, inReportConfig, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });

    if (LocalUserPK > 0) {
        let LocalData;
        let LocalVouchersConsiderArray;
        let LocalVouchersConsiderFindObject;
        let LocalVouchersConsider = "VouchersConsider";
        let LocalVouchersConsiderFilterObject = { pk: 0 };
        let LocalReportName = inReportConfig.inReportName;
        let LocalPkName = inReportConfig.inPkName;

        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig, inUserPK: LocalUserPK });

        LocalVouchersConsiderArray = LocalDataFromJSON[LocalReportName][LocalVouchersConsider];
        LocalVouchersConsiderFilterObject.pk = parseInt(LocalPkName);
        LocalVouchersConsiderFindObject = _.find(LocalVouchersConsiderArray, LocalVouchersConsiderFilterObject);

        LocalVouchersConsiderFindObject = _.find(LocalVouchersConsiderArray, LocalVouchersConsiderFilterObject);

        LocalData = LocalVouchersConsiderFindObject.JoinTablesColumns.map((LoopItem) => {
            return [LoopItem.pk, LoopItem.DisplayColumn];
        });

        callback(LocalData, null);

    };
};

module.exports = { ShowNames, ShowItemNames, JoinTablesColumns, VouchersConsider, Columns, JoinTables };