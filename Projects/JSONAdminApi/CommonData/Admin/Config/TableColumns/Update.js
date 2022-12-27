//let CommonPushDataAdmin = require("../../../Fs/PushData/Admin");
//let CommonUpdate = require("../Update");
let CommonUpdate = require("../../../../../../DataSupply/Fs/GeneralFuns/UseKQueryObject/Update");
let CommonDisplayPullData=  require("../../../../../../DataSupply/Fs/DefultFileNames/Display/PullData");
let CommonDisplayPushData=  require("../../../../../../DataSupply/Fs/DefultFileNames/Display/PushData");

let PushData = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        let LocalDataFromJSON = CommonDisplayPullData.ReturnDataFromJson({ inJsonConfig, inUserPK });

        let LocalUpdatedData = CommonUpdate.PushData({ inItemConfig, inQueryObject, inDisplayData: LocalDataFromJSON, inObjectToUpdate });

        CommonDisplayPushData.PushDataFunc({ inJsonConfig, inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalUpdatedData }).then((PromiseData) => {
            resolve(PromiseData);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = { PushData };