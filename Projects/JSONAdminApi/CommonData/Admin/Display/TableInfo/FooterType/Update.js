let CommonPullDataAdmin = require("../../../../Fs/PullData/Admin");
let CommonPushDataAdmin = require("../../../../Fs/PushData/Admin");

let PushData = ({ inJsonConfig, inItemConfig, inUserPK, inKeyName, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        //debug("startinKeyName : ", inKeyName);

        let LocalDataFromJSON = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
        let LocalUpdatedData = JSON.parse(JSON.stringify(LocalDataFromJSON));
        let LocalKeyData = LocalUpdatedData[inItemConfig.inItemName][inItemConfig.inScreenName].TableInfo.FooterType;

        for (var property in inObjectToUpdate) {
            LocalKeyData[property]=inObjectToUpdate[property];
        };

        CommonPushDataAdmin.PushData({ inJsonConfig, inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalUpdatedData }).then((PromiseData) => {
            resolve(PromiseData);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = { PushData };