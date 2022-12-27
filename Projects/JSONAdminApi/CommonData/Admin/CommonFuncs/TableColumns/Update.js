let debug = require("debug")("KS15");
let CommonPullDataAdmin = require("../../../Fs/PullData/Admin");
let CommonPushDataAdmin = require("../../../Fs/PushData/Admin");
let CommonReturnTableColumnArray = require("./ReturnTableColumnArray");
let CommonReturnArrayElement = require("./ReturnArrayElement");
let CommonPullDataFromKeysArray = require("./PullDataFromKeysArray");

let UpdateTableColumnDataWithKey = ({ inJsonConfig, inItemConfig, inUserPK, inKeysArray, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        debug("UpdateTableColumnDataWithKey : ", UpdateTableColumnDataWithKey);
        let LocalDataFromJSONToUpdate;
        let LocalColumnObjectToUpdate;
        let LocalLoopObject;

        let LocalDataFromJSON = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
        LocalDataFromJSONToUpdate = JSON.parse(JSON.stringify(LocalDataFromJSON));

        let LocalTableColumnsArray = CommonReturnTableColumnArray.ReturnArray({ inDisplayJsonData: LocalDataFromJSONToUpdate, inItemConfig });

        LocalColumnObjectToUpdate = CommonReturnArrayElement.ReturnArrayElement({ inTableColumnsArray: LocalTableColumnsArray, inItemConfig });
        LocalLoopObject = CommonPullDataFromKeysArray.CheckKeys({ inColumnObjectToUpdate: LocalColumnObjectToUpdate, inKeysArray });

        Object.assign(LocalLoopObject, inObjectToUpdate);

        CommonPushDataAdmin.PushData({ inJsonConfig, inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalDataFromJSONToUpdate }).then((PromiseData) => {
            resolve(PromiseData);
        }).catch((error) => {
            reject(error);
        })
    });
};

let UpdateTableColumnDataOnly = ({ inJsonConfig, inItemConfig, inUserPK, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        debug("UpdateTableColumnDataOnly : ", UpdateTableColumnDataOnly);
        let LocalDataFromJSONToUpdate;
        let LocalColumnObjectToUpdate;

        let LocalDataFromJSON = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
        LocalDataFromJSONToUpdate = JSON.parse(JSON.stringify(LocalDataFromJSON));

        let LocalTableColumnsArray = CommonReturnTableColumnArray.ReturnArray({ inDisplayJsonData: LocalDataFromJSONToUpdate, inItemConfig });

        LocalColumnObjectToUpdate = CommonReturnArrayElement.ReturnArrayElement({ inTableColumnsArray: LocalTableColumnsArray, inItemConfig });

        Object.assign(LocalColumnObjectToUpdate, inObjectToUpdate);

        CommonPushDataAdmin.PushData({ inJsonConfig, inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalDataFromJSONToUpdate }).then((PromiseData) => {
            resolve(PromiseData);
        }).catch((error) => {
            reject(error);
        })
    });
};

module.exports = { UpdateTableColumnDataWithKey, UpdateTableColumnDataOnly };