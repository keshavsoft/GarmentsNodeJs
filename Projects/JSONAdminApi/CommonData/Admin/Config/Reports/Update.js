let CommonPull = require("../../../Fs/PullData/Reports");
let CommonPush = require("../../../Fs/PushData/Reports");
let CommonUpdate = require("../Update");

let _ = require("lodash");
let debug = require("debug")("KS13");

let PushData = ({  inReportConfig, inUserPK, inQueryObject, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        let LocalDataFromJSON = CommonPull.PullDataReport({ inUserPK });

        let LocalUpdatedData = CommonUpdate.PushData({ inItemConfig: inReportConfig, inQueryObject, inDisplayData: LocalDataFromJSON, inObjectToUpdate });
      //  debug("LocalUpdatedData : ", LocalUpdatedData);
        CommonPush.PushDataReport({ inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalUpdatedData }).then((PromiseData) => {
            resolve(PromiseData);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = { PushData };