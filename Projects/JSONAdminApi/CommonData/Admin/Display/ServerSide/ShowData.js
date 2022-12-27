let _ = require("lodash");
let debug = require("debug")("KS7");
let GlobalUserNameToPK = require("../../../Users/NameToPK");
let CommonPullDataAdmin = require("../../../Fs/PullData/Admin");
let CommonColumnKey = "TableColumns";

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

let ReturnTableColumnDataWithKey = ({ inJsonConfig, inItemConfig, inUserName, inKeyName }) => {
    let LocalColumnData = ReturnTableColumnDataElement({ inJsonConfig, inItemConfig, inUserName, inKeyName });
    let LocalReturnObject = {};

    LocalReturnObject = _.get(LocalColumnData, inKeyName);

    if (LocalReturnObject === undefined) { return {} };
    
    return LocalReturnObject;
};

module.exports = {  };