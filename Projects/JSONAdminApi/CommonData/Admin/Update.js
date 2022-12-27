let CommonPullDataAdmin = require("../Fs/PullData/Admin");
let CommonPushDataAdmin = require("../Fs/PushData/Admin");
let _ = require("lodash");
let debug = require("debug")("KS23");

let PushData = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        let LocalDataFromJSON = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
        let LocalUpdatedData = JSON.parse(JSON.stringify(LocalDataFromJSON));
        let LocalKeyData = LocalUpdatedData[inItemConfig.inItemName][inItemConfig.inScreenName];
        
        _.set(LocalKeyData, inQueryObject, inObjectToUpdate);
        
        CommonPushDataAdmin.PushData({ inJsonConfig, inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalUpdatedData }).then((PromiseData) => {
            resolve(PromiseData);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = { PushData };