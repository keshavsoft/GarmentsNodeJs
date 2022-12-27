let _ = require("lodash");
let debug = require("debug")("KS7");
let GlobalUserNameToPK = require("../../../../Users/NameToPK");
let CommonPullDataAdmin = require("../../../../Fs/PullData/Admin");
let CommonColumnKey = "TableColumns";
let CommonSubColumnKey = "SubTableColumns";



let LocalColumnFuncs = {
    ReturnTableColumnsArray: ({ inData, inItemConfig, inColumnKey }) => {
        let LocalItemName = inItemConfig.inItemName;
        let LocalScreenName = inItemConfig.inScreenName;

        let LocalGetKey = `${LocalItemName}.${LocalScreenName}.${inColumnKey}`;

        let LocalTableColumnsArray = _.get(inData, LocalGetKey);

        return LocalTableColumnsArray;
    },
    ReturnColumn: ({ inTableColumnsArray, inColumnName }) => {
        let LocalColumnReturnWithIndex = { ColumnIndex: -1, ColumnData: {} };

        let LocalFindObject = { DataAttribute: inColumnName };

        LocalColumnReturnWithIndex.ColumnIndex = _.findIndex(inTableColumnsArray, LocalFindObject);

        if (LocalColumnReturnWithIndex.ColumnIndex >= 0 && LocalColumnReturnWithIndex.ColumnIndex <= inTableColumnsArray.length) {
            LocalColumnReturnWithIndex.ColumnData = inTableColumnsArray[LocalColumnReturnWithIndex.ColumnIndex];
        };

        return LocalColumnReturnWithIndex;
    }
};

let LocalUpdateFuncs = {
    ColumnDataWithKey: {
        StartFunc: ({ inData, inItemConfig, inColumnKey, inKeyToBeAltered, inObjectToUpdate }) => {
            let LocalTableColumnsArray;
            let LocalColumnReturnWithIndex;
            let LocalColumnObjectToUpdate;
            let LocalColumnIndexToUpdate;
            let LocalColumnName = inItemConfig.inColumnName;

            LocalTableColumnsArray = LocalColumnFuncs.ReturnTableColumnsArray({ inData, inItemConfig, inColumnKey });

            LocalColumnReturnWithIndex = LocalColumnFuncs.ReturnColumn({ inTableColumnsArray: LocalTableColumnsArray, inColumnName: LocalColumnName });
            LocalColumnObjectToUpdate = LocalColumnReturnWithIndex.ColumnData;
            LocalColumnIndexToUpdate = LocalColumnReturnWithIndex.ColumnIndex;

            Object.assign(LocalColumnObjectToUpdate[inKeyToBeAltered], inObjectToUpdate);

            LocalTableColumnsArray.splice(LocalColumnIndexToUpdate, 1, LocalColumnObjectToUpdate);

            return inData;
        }
    }
};

let ReturnTableColumnData = ({ inJsonConfig, inItemConfig, inUserName }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        let LocalTableColumnData;

        let LocalItemName = inItemConfig.inItemName;
        let LocalScreenName = inItemConfig.inScreenName;
        let LocalColumnName = inItemConfig.inColumnName;

        let LocalDataFromJSON = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK: LocalUserPK });
        LocalTableColumnData = _.get(LocalDataFromJSON, `${LocalItemName}.${LocalScreenName}.${CommonSubColumnKey}.${LocalColumnName}.${CommonColumnKey}`);
        console.log("LocalColumnData", LocalTableColumnData)
   
        return LocalTableColumnData;
    };
};

let ReturnTableColumnDataElement = ({ inJsonConfig, inItemConfig, inUserName, inKeyName }) => {
    let LocalSubTableColumnName = inItemConfig.inSubTableColumnName;

    let LocalTableColumnData = ReturnTableColumnData({ inJsonConfig, inItemConfig, inUserName });
   
    let LocalColumnData = _.find(LocalTableColumnData, { DataAttribute: LocalSubTableColumnName });

    return LocalColumnData;
};

let ReturnTableColumnDataWithKey = ({ inJsonConfig, inItemConfig, inUserName, inKeyName }) => {
    let LocalColumnData = ReturnTableColumnDataElement({ inJsonConfig, inItemConfig, inUserName, inKeyName });
    let LocalReturnObject = {};
    LocalReturnObject = _.get(LocalColumnData, inKeyName);

    if (LocalReturnObject === undefined) { return {} };

    return LocalReturnObject;
};

let UpdateTableColumnDataWithKey = ({ inJsonConfig, inItemConfig, inUserPK, inKeyName, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        let LocalDataFromJSONUpdated;

        let LocalDataFromJSON = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
        let LocalDataFromJSONObject = JSON.parse(LocalDataFromJSON);

        LocalDataFromJSONUpdated = LocalUpdateFuncs.ColumnDataWithKey.StartFunc({ inData: LocalDataFromJSONObject, inItemConfig, inColumnKey: CommonColumnKey, inKeyToBeAltered: inKeyName, inObjectToUpdate });

        CommonPushDataAdmin.PushData({ inJsonConfig, inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalDataFromJSONUpdated }).then((PromiseData) => {
            resolve(PromiseData);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = { ReturnTableColumnDataElement, ReturnTableColumnDataWithKey, UpdateTableColumnDataWithKey };