let _ = require("lodash");
let debug = require("debug")("KS10");
let UserNameToPKRet = require("../../../CommonData/Users/NameToPK");
let GlobalCommonData = require("../../../CommonData/Fs/PullData/Show");
let CommonPullDataReports = require("../../../CommonData/Fs/PullData/Reports");
let CommonPushDataReports = require("../../../CommonData/Fs/PushData/Reports");
let CommonData = require("../../../CommonData/Admin/Reports/LedgerAuto/TableColumns/Update");

let LocalColumnFuncs = {
    ReturnTableColumnsArray: ({ inData, inItemConfig, inKeyToBeAltered }) => {
        let LocalItemName = inItemConfig.inItemName;

        let LocalGetKey = `${LocalItemName}.${inKeyToBeAltered}`;

        let LocalTableColumnsArray = _.get(inData, LocalGetKey);

        return LocalTableColumnsArray;
    },
    ReturnColumn: ({ inTableColumnsArray, inPkName }) => {
        let LocalColumnReturnWithIndex = { ColumnIndex: -1, ColumnData: {} };

        let LocalFindObject = { pk: parseInt(inPkName) };

        LocalColumnReturnWithIndex.ColumnIndex = _.findIndex(inTableColumnsArray, LocalFindObject);

        if (LocalColumnReturnWithIndex.ColumnIndex >= 0 && LocalColumnReturnWithIndex.ColumnIndex <= inTableColumnsArray.length) {
            LocalColumnReturnWithIndex.ColumnData = inTableColumnsArray[LocalColumnReturnWithIndex.ColumnIndex];
        };

        return LocalColumnReturnWithIndex;
    }
};

let LocalUpdateFuncs = {
    VouchersConsider: {
        StartFunc: ({ inData, inItemConfig, inKeyToBeAltered, inObjectToUpdate }) => {
            let LocalDataUpdated = _.cloneDeep(inData);
            let LocalTableColumnsArray;
            let LocalReportName = inItemConfig.inItemName;
            let LocalColumnReturnWithIndex;
            let LocalColumnObjectToUpdate;
            let LocalColumnIndexToUpdate;
            let LocalPkName = parseInt(inItemConfig.inPkName);
            let LocalVouchersConsiderArrayElement;

            LocalVouchersConsiderArrayElement = _.find(LocalDataUpdated[LocalReportName].VouchersConsider, { pk: LocalPkName });
            //debug(LocalVouchersConsiderArrayElement);

            Object.assign(LocalVouchersConsiderArrayElement, inObjectToUpdate);

            //debug(LocalVouchersConsiderArrayElement);

            debug(LocalDataUpdated[LocalReportName].VouchersConsider);

            return LocalDataUpdated;
        },
        StartFunc1: ({ inData, inItemConfig, inKeyToBeAltered, inObjectToUpdate }) => {
            let LocalTableColumnsArray;
            let LocalColumnReturnWithIndex;
            let LocalColumnObjectToUpdate;
            let LocalColumnIndexToUpdate;
            let LocalPkName = inItemConfig.inPkName;

            //   LocalTableColumnsArray = _.get(inData, inGetKey);
            LocalTableColumnsArray = LocalColumnFuncs.ReturnTableColumnsArray({ inData, inItemConfig, inKeyToBeAltered });

            LocalColumnReturnWithIndex = LocalColumnFuncs.ReturnColumn({ inTableColumnsArray: LocalTableColumnsArray, inPkName: LocalPkName });
            LocalColumnObjectToUpdate = LocalColumnReturnWithIndex.ColumnData;
            LocalColumnIndexToUpdate = LocalColumnReturnWithIndex.ColumnIndex;
            LocalColumnIndexToUpdate = LocalColumnReturnWithIndex.ColumnIndex;
            console.log("LocalColumnObjectToUpdate", LocalColumnObjectToUpdate, LocalColumnIndexToUpdate);


            Object.assign(LocalColumnObjectToUpdate, inObjectToUpdate);

            LocalTableColumnsArray.splice(LocalColumnIndexToUpdate, 1, LocalColumnObjectToUpdate);

            //LocalColumnFuncs.SetColumnData({ inData, inItemConfig, inKeyToBeAltered, inTableColumnsArrayUpdated: LocalTableColumnsArray });
            console.log('inData', inData);
            return inData;
        },

        PrepareObjectForUpdate: ({ inTableColumnsArray, inFindObject, inObjectToUpdate }) => {
            let LocalColumnIndexToUpdate;
            let LocalColumnObjectToUpdate;

            LocalColumnIndexToUpdate = _.findIndex(inTableColumnsArray, inFindObject);

            if (LocalColumnIndexToUpdate >= 0 && LocalColumnIndexToUpdate <= inTableColumnsArray.length) {
                LocalColumnObjectToUpdate = _.find(inTableColumnsArray, inFindObject);
                Object.assign(LocalColumnObjectToUpdate, inObjectToUpdate);

                inTableColumnsArray.splice(LocalColumnIndexToUpdate, 1, LocalColumnObjectToUpdate);

                return inTableColumnsArray;
            }
        },
        PrepareObjectForUpdate1: ({ inTableColumnsArray, inFindObject, inObjectToUpdate }) => {
            let LocalColumnIndexToUpdate;
            let LocalColumnObjectToUpdate;

            LocalColumnIndexToUpdate = _.findIndex(inTableColumnsArray, inFindObject);

            if (LocalColumnIndexToUpdate >= 0 && LocalColumnIndexToUpdate <= inTableColumnsArray.length) {
                LocalColumnObjectToUpdate = _.find(inTableColumnsArray, inFindObject);
                Object.assign(LocalColumnObjectToUpdate, inObjectToUpdate);

                inTableColumnsArray.splice(LocalColumnIndexToUpdate, 1, LocalColumnObjectToUpdate);

                return inTableColumnsArray;
            }
        }
    },
    Columns: {
        StartFunc: ({ inData, inItemConfig, inObjectToUpdate }) => {
            let LocalDataUpdated = _.cloneDeep(inData);
            let LocalReportName = inItemConfig.inItemName;
            let LocalColumns = "Columns";
            let LocalPkName = parseInt(inItemConfig.inPkName);
            let LocalColumnsPk = parseInt(inItemConfig.inColumnsPk);

            let LocalVouchersConsiderArrayElement;
            let LocalColumnsArrayElement;

            LocalVouchersConsiderArrayElement = _.find(LocalDataUpdated[LocalReportName].VouchersConsider, { pk: LocalPkName });
            LocalColumnsArrayElement = _.find(LocalVouchersConsiderArrayElement[LocalColumns], { pk: LocalColumnsPk });

            Object.assign(LocalColumnsArrayElement, inObjectToUpdate);
            return LocalDataUpdated;
        },


        PrepareObjectForUpdate: ({ inTableColumnsArray, inFindObject, inObjectToUpdate }) => {
            let LocalColumnIndexToUpdate;
            let LocalColumnObjectToUpdate;

            LocalColumnIndexToUpdate = _.findIndex(inTableColumnsArray, inFindObject);

            if (LocalColumnIndexToUpdate >= 0 && LocalColumnIndexToUpdate <= inTableColumnsArray.length) {
                LocalColumnObjectToUpdate = _.find(inTableColumnsArray, inFindObject);
                Object.assign(LocalColumnObjectToUpdate, inObjectToUpdate);

                inTableColumnsArray.splice(LocalColumnIndexToUpdate, 1, LocalColumnObjectToUpdate);

                return inTableColumnsArray;
            }
        },
        PrepareObjectForUpdate1: ({ inTableColumnsArray, inFindObject, inObjectToUpdate }) => {
            let LocalColumnIndexToUpdate;
            let LocalColumnObjectToUpdate;

            LocalColumnIndexToUpdate = _.findIndex(inTableColumnsArray, inFindObject);

            if (LocalColumnIndexToUpdate >= 0 && LocalColumnIndexToUpdate <= inTableColumnsArray.length) {
                LocalColumnObjectToUpdate = _.find(inTableColumnsArray, inFindObject);
                Object.assign(LocalColumnObjectToUpdate, inObjectToUpdate);

                inTableColumnsArray.splice(LocalColumnIndexToUpdate, 1, LocalColumnObjectToUpdate);

                return inTableColumnsArray;
            }
        }
    },
    JoinTables: {
        StartFunc: ({ inData, inItemConfig, inObjectToUpdate }) => {
            let LocalDataUpdated = _.cloneDeep(inData);
            let LocalReportName = inItemConfig.inItemName;
            let LocalJoinTables = "JoinTables";
            let LocalPkName = parseInt(inItemConfig.inPkName);
            let LocalinJoinTablesSelected = inItemConfig.inJoinTablesSelected;

            let LocalVouchersConsiderArrayElement;
            let LocalColumnsArrayElement;

            LocalVouchersConsiderArrayElement = _.find(LocalDataUpdated[LocalReportName].VouchersConsider, { pk: LocalPkName });
            LocalColumnsArrayElement = _.find(LocalVouchersConsiderArrayElement[LocalJoinTables][0], LocalinJoinTablesSelected);
            LocalJoinTablesObject = _.get(LocalColumnsArrayElement ,"JsonConfig");
            
            Object.assign(LocalJoinTablesObject, inObjectToUpdate);
            return LocalDataUpdated;
        },


        PrepareObjectForUpdate: ({ inTableColumnsArray, inFindObject, inObjectToUpdate }) => {
            let LocalColumnIndexToUpdate;
            let LocalColumnObjectToUpdate;

            LocalColumnIndexToUpdate = _.findIndex(inTableColumnsArray, inFindObject);

            if (LocalColumnIndexToUpdate >= 0 && LocalColumnIndexToUpdate <= inTableColumnsArray.length) {
                LocalColumnObjectToUpdate = _.find(inTableColumnsArray, inFindObject);
                Object.assign(LocalColumnObjectToUpdate, inObjectToUpdate);

                inTableColumnsArray.splice(LocalColumnIndexToUpdate, 1, LocalColumnObjectToUpdate);

                return inTableColumnsArray;
            }
        },
        PrepareObjectForUpdate1: ({ inTableColumnsArray, inFindObject, inObjectToUpdate }) => {
            let LocalColumnIndexToUpdate;
            let LocalColumnObjectToUpdate;

            LocalColumnIndexToUpdate = _.findIndex(inTableColumnsArray, inFindObject);

            if (LocalColumnIndexToUpdate >= 0 && LocalColumnIndexToUpdate <= inTableColumnsArray.length) {
                LocalColumnObjectToUpdate = _.find(inTableColumnsArray, inFindObject);
                Object.assign(LocalColumnObjectToUpdate, inObjectToUpdate);

                inTableColumnsArray.splice(LocalColumnIndexToUpdate, 1, LocalColumnObjectToUpdate);

                return inTableColumnsArray;
            }
        }
    }
};

let VouchersConsider = ({ inJsonConfig, inReportConfig, inObjectToUpdate, inUserName, inQueryObject, callback }) => {
    let LocalUserPK = UserNameToPKRet.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        CommonData.PushDataReports({ inJsonConfig, inReportConfig, inUserPK: LocalUserPK,  inObjectToUpdate, inQueryObject }).then((PromiseData) => {
            callback(PromiseData, null);
        })
    };
};

let Columns = ({ inJsonConfig, inItemConfig, inObjectToUpdate, inUserName, callback }) => {
    let LocalUserPK = UserNameToPKRet.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        let LocalDataFromJSONUpdated;
        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig, inUserPK: LocalUserPK });

        LocalDataFromJSONUpdated = LocalUpdateFuncs.Columns.StartFunc({ inData: LocalDataFromJSON, inItemConfig, inObjectToUpdate });

        CommonPushDataReports.PushDataReport({ inJsonConfig, inUserPK: LocalUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalDataFromJSONUpdated }).then((PromiseData) => {
            callback(PromiseData, null);
        });
    };
};

let JoinTables = ({ inJsonConfig, inItemConfig, inObjectToUpdate, inUserName, callback }) => {
    let LocalUserPK = UserNameToPKRet.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        let LocalDataFromJSONUpdated;
        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig, inUserPK: LocalUserPK });

        LocalDataFromJSONUpdated = LocalUpdateFuncs.JoinTables.StartFunc({ inData: LocalDataFromJSON, inItemConfig, inObjectToUpdate });

        CommonPushDataReports.PushDataReport({ inJsonConfig, inUserPK: LocalUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalDataFromJSONUpdated }).then((PromiseData) => {
            callback(PromiseData, null);
        });
    };
};
module.exports = { VouchersConsider, Columns, JoinTables };