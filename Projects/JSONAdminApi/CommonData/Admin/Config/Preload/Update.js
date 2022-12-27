let debug = require("debug")("KS30");
let CommonUpdate = require("../Update");
let CommonPullData = require("../../../Fs/PullData/Preload");
let CommonPushData = require("../../../Fs/PushData/Preload");

let PushData = ({ inItemConfig, inUserPK, inQueryObject, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        let LocalDataFromJSON = CommonPullData.FromJsonPreload({ inUserPK });
        let LocalUpdatedData = CommonUpdate.PushData({ inItemConfig, inQueryObject, inDisplayData: LocalDataFromJSON, inObjectToUpdate });

        CommonPushData.PushData({ inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalUpdatedData }).then((PromiseData) => {
            resolve(PromiseData);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = { PushData };