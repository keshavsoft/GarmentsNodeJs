let CommonPullDataAdmin = require("../../../Fs/PullData/Admin");
let CommonPushDataAdmin = require("../../../Fs/PushData/Admin");

let _ = require("lodash");
let debug = require("debug")("KS9");
let CommonUpdate = require("../Update");

let PushData = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        let LocalDataFromJSON = CommonPullDataAdmin.ReturnDataJson({ inJsonConfig, inUserPK });

        let LocalUpdatedData = CommonUpdate.PushData({ inItemConfig, inQueryObject, inDisplayData: LocalDataFromJSON, inObjectToUpdate });

        CommonPushDataAdmin.PushToReturnData({ inJsonConfig, inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalUpdatedData }).then((PromiseData) => {
            resolve(PromiseData);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = { PushData };