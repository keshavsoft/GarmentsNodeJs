let CommonFromPushData = require("../../PushData/FromFolderFileItemName");

let CommonFromServerSideChecks = require("../ServerSideChecks/CheckBeforeSave");
let CommonFromPullData = require("../../PullData/FromFolderFileItemName");
let CommonFromConfigFolder = require("../../../../../../ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/TableColumns/PullData/AsArray");

const toNumbers = arr => arr.map(Number);

let LocalGeneratePk = ({ inDataWithKey }) => {
    let LocalNewPk = 1;
    let LocalPkArray = toNumbers(Object.keys(inDataWithKey));

    if (LocalPkArray.length > 0) {
        LocalNewPk = Math.max(...LocalPkArray) + 1;
    };

    return LocalNewPk;
};

let StartFunc = async ({ inFolderName, inFileNameOnly, inItemName, inScreenName, inDataPK, inDataToInsert }) => {
    let LocalinFolderName = inFolderName;
    let LocalinFileNameOnly = inFileNameOnly;
    let LocalinItemName = inItemName;
    let LocalScreenName = inScreenName;

    let LocalinDataPK = inDataPK;
    let LocalReturnData = { KTF: false, DirPath: "", CreatedLog: {} };

    let LocalFromCommonFromPullData = CommonFromPullData.StartFunc({
        inFolderName: LocalinFolderName,
        inFileNameOnly: LocalinFileNameOnly,
        inItemName: LocalinItemName,
        inDataPK: LocalinDataPK
    });

    if (LocalFromCommonFromPullData.KTF === false) {
        LocalReturnData.KReason = LocalFromCommonFromPullData.KReason;
        return await LocalReturnData;
    };

    let LocalFromCommonFromConfigFolder = await CommonFromConfigFolder.StartFunc({
        inFolderName: LocalinFolderName,
        inFileNameWithExtension: `${LocalinFileNameOnly}.json`,
        inItemName: LocalinItemName,
        inScreenName: LocalScreenName,
        inDataPK: LocalinDataPK
    });

    if (LocalFromCommonFromConfigFolder.KTF === false) {
        LocalReturnData.KReason = LocalFromCommonFromConfigFolder.KReason;
        return await LocalReturnData;
    };

    let LocalFromCheck = await CommonFromServerSideChecks.ServerSideCheckAsync({
        inItemName: LocalinItemName,
        inUserData: LocalFromCommonFromPullData.JsonData,
        inConfigTableColumns: LocalFromCommonFromConfigFolder.JsonData,
        inDataPK: LocalinDataPK,
        inObjectToInsert: inDataToInsert
    });

    if (LocalFromCheck.KTF === false) {
        LocalReturnData.KReason = LocalFromCheck.KReason;
        return await LocalReturnData;
    };

    let LocalFromCommonFromPushDataToFile = await CommonFromPushData.StartFunc({
        inFolderName: LocalinFolderName,
        inFileNameOnly: LocalinFileNameOnly,
        inItemName: LocalinItemName,
        inDataToInsert: inDataToInsert,
        inDataPK: LocalinDataPK
    })

    if (LocalFromCommonFromPushDataToFile.KTF === false) {
        LocalReturnData.KReason = LocalFromCommonFromPushDataToFile.KReason;
        return await LocalReturnData;
    };

    LocalReturnData.KTF = true;

    return await LocalReturnData;
};

// console.log("ForExistence----- : ", ReturnAsArrayWithPKSortByPK({
//     inFolderName: "Transactions",
//     inFileNameOnly: "GST-SALES",
//     inItemName: "FERTLIZERS-GST--SALES",
//     inDataPK: 1024
// }).JsonData[0]);

module.exports = { StartFunc };
