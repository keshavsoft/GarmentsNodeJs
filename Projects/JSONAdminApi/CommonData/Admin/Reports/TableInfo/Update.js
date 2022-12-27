let CommonPullDataReports = require("../../../Fs/PullData/Reports");
let CommonPushDataReports = require("../../../Fs/PushData/Reports");
//let CommonUpdate = require("../../Update");
let CommonUpdate = require("../../../../../../DataSupply/Fs/GeneralFuns/UseKQueryObject/Update");

let PushData = ({ inJsonConfig, inReportConfig, inUserPK, inQueryObject, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        console.log("inObjectToUpdate : ", inObjectToUpdate, inQueryObject, inReportConfig);
        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig, inUserPK });

        let LocalUpdatedData = CommonUpdate.PushData({
            inItemConfig: inReportConfig,
            inQueryObject, inDisplayData: LocalDataFromJSON, inObjectToUpdate
        });

        CommonPushDataReports.PushDataReport({ inJsonConfig, inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalUpdatedData }).then((PromiseData) => {
            resolve(PromiseData);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = { PushData };