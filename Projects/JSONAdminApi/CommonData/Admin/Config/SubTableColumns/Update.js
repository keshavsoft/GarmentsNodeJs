let CommonPullDataAdmin = require("../../../Fs/PullData/Admin");
let CommonPushDataAdmin = require("../../../Fs/PushData/Admin");
let CommonUpdate = require("../Update");

let PushData = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        let LocalDataFromJSON = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
        console.log("inObjectToUpdate : ", inObjectToUpdate, inQueryObject);
        let LocalUpdatedData = CommonUpdate.PushData({ inItemConfig, inQueryObject, inDisplayData: LocalDataFromJSON, inObjectToUpdate });

        CommonPushDataAdmin.PushData({ inJsonConfig, inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalUpdatedData }).then((PromiseData) => {
            resolve(PromiseData);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = { PushData };