let _ = require("lodash");

let CommonPullDataFromConfig = require("../../../../PullData/FromConfig");
let CommonPushDataToConfig = require("../../../../PushData/ToConfig");
let CommonUpdateFuncs = require("../../CommonFuns/CommonUpdate");

let UpdateKeys = async ({ inJsonConfig, inItemConfig, inTableColumnName, inObjectToUpdate, inDataPk }) => {
    const LocalDataToUpdate = (({ DisplayName, ShowInTable, Insert, CreateNew, IsTextArea }) => ({ DisplayName, ShowInTable, Insert, CreateNew, IsTextArea }))(inObjectToUpdate);

    let LocalItemName = inItemConfig.inItemName;
    let LocalScreenName = inItemConfig.inScreenName;
    let LocalColumnName = inItemConfig.inColumnName;
    let LocalSubTableColumnName = inItemConfig.inSubTableColumnName;

    let LocalFindColumnObject;
    let LocalFromUpdate;
    let LocalReturnObject = { KTF: false };

    let LocalFromPullData = await CommonPullDataFromConfig.AsJsonAsync({
        inJsonConfig,
        inUserPK: inDataPk
    });

    LocalFindColumnObject = _.find(LocalFromPullData[LocalItemName][LocalScreenName].SubTableColumns[LocalColumnName].TableColumns, { DataAttribute: LocalSubTableColumnName });

    if (LocalFindColumnObject !== undefined) {

        CommonUpdateFuncs.UpdateKeysNeededOnly({
            inFindColumnObject: LocalFindColumnObject,
            inDataToUpdate: LocalDataToUpdate
        });

        LocalFromUpdate = await CommonPushDataToConfig.AsAsync({
            inJsonConfig,
            inUserPK: inDataPk,
            inDataToUpdate: LocalFromPullData
        });

        if (LocalFromUpdate.KTF) {
            LocalReturnObject.KTF = true;
        };

      //  return await LocalReturnObject;
    };

    // console.log("LocalFindColumnObject : ", LocalFindColumnObject, inItemConfig, inTableColumnName);

    // if (LocalItemName in LocalFromPullData) {
    //     if (LocalScreenName in LocalFromPullData[LocalItemName]) {
    //         if ("TableColumns" in LocalFromPullData[LocalItemName][LocalScreenName]) {
    //             LocalFindColumnObject = _.find(LocalFromPullData[LocalItemName][LocalScreenName].TableColumns, { DataAttribute: inTableColumnName });
    //             // await LocalUpdateKeys({
    //             //     inFindColumnObject: LocalFindColumnObject,
    //             //     inDataToUpdate: LocalDataToUpdate
    //             // });
    //             //    console.log("end : ",LocalFindColumnObject);
    //             CommonUpdateFuncs.UpdateKeysNeededOnly({
    //                 inFindColumnObject: LocalFindColumnObject,
    //                 inDataToUpdate: LocalDataToUpdate
    //             });


    //             // LocalFromUpdate = await CommonPushDataToConfig.AsAsync({
    //             //     inJsonConfig,
    //             //     inUserPK: inDataPk,
    //             //     inDataToUpdate: LocalFromPullData
    //             // });

    //             // if (LocalFromUpdate.KTF) {
    //             //     LocalReturnObject.KTF = true;
    //             // };

    //             return await LocalReturnObject;
    //         };
    //     };
    // };

    return await LocalReturnObject;

};
let UpdateKeys1 = async ({ inJsonConfig, inItemConfig, inTableColumnName, inObjectToUpdate, inDataPk }) => {
    const LocalDataToUpdate = (({ DisplayName, ShowInTable, Insert, CreateNew, IsTextArea }) => ({ DisplayName, ShowInTable, Insert, CreateNew, IsTextArea }))(inObjectToUpdate);

    let LocalItemName = inItemConfig.inItemName;
    let LocalScreenName = inItemConfig.inScreenName;
    let LocalFindColumnObject;
    let LocalFromUpdate;
    let LocalReturnObject = { KTF: false };

    let LocalFromPullData = await CommonPullDataFromConfig.AsJsonAsync({
        inJsonConfig,
        inUserPK: inDataPk
    });

    if (LocalItemName in LocalFromPullData) {
        if (LocalScreenName in LocalFromPullData[LocalItemName]) {
            if ("TableColumns" in LocalFromPullData[LocalItemName][LocalScreenName]) {
                LocalFindColumnObject = _.find(LocalFromPullData[LocalItemName][LocalScreenName].TableColumns, { DataAttribute: inTableColumnName });
                // await LocalUpdateKeys({
                //     inFindColumnObject: LocalFindColumnObject,
                //     inDataToUpdate: LocalDataToUpdate
                // });
                //    console.log("end : ",LocalFindColumnObject);
                CommonUpdateFuncs.UpdateKeysNeededOnly({
                    inFindColumnObject: LocalFindColumnObject,
                    inDataToUpdate: LocalDataToUpdate
                });


                LocalFromUpdate = await CommonPushDataToConfig.AsAsync({
                    inJsonConfig,
                    inUserPK: inDataPk,
                    inDataToUpdate: LocalFromPullData
                });

                if (LocalFromUpdate.KTF) {
                    LocalReturnObject.KTF = true;
                };

                return await LocalReturnObject;
            };
        };
    };

    return await LocalReturnObject;

};

module.exports = {
    UpdateKeys
};