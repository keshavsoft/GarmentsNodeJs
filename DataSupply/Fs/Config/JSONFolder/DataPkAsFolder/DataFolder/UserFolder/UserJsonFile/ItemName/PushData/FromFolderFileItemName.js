let CommonFromPullDataFromFile = require("../../PullDataFromFile/FromFolderAndFile");
let CommonFromPushDataToFile = require("../../PushDataToFile/FolderAndFile");

const toNumbers = arr => arr.map(Number);

let LocalGeneratePk = ({ inDataWithKey }) => {
    let LocalNewPk = 1;
    let LocalPkArray = toNumbers(Object.keys(inDataWithKey));

    if (LocalPkArray.length > 0) {
        LocalNewPk = Math.max(...LocalPkArray) + 1;
    };

    return LocalNewPk;
};

let StartFunc = async ({ inFolderName, inFileNameOnly, inItemName, inDataPK, inDataToInsert }) => {
    console.log(" cccccccc : ", inFolderName, inFileNameOnly, inItemName, inDataPK, inDataToInsert);

    let LocalinFolderName = inFolderName;
    let LocalinFileNameOnly = inFileNameOnly;
    let LocalinItemName = inItemName;

    let LocalinDataPK = inDataPK;
    let LocalReturnData = { KTF: false, DirPath: "", CreatedLog: {} };

    let LocalFromCommonFromCheck = CommonFromPullDataFromFile.StartFunc({
        inFolderName: LocalinFolderName,
        inFileNameOnly: LocalinFileNameOnly,
        inDataPK: LocalinDataPK
    });

    if (LocalFromCommonFromCheck.KTF === false) {
        LocalReturnData.KReason = LocalFromCommonFromCheck.KReason;
        return LocalReturnData;
    };

    if ((LocalinItemName in LocalFromCommonFromCheck.JsonData) === false) {
        LocalReturnData.KReason = `Item Name : ${LocalinItemName} not found!`;
        return LocalReturnData;
    };

    let LocalNewPk = LocalGeneratePk({ inDataWithKey: LocalFromCommonFromCheck.JsonData[LocalinItemName] });
    LocalFromCommonFromCheck.JsonData[LocalinItemName][LocalNewPk] = inDataToInsert;

    let LocalFromPush = await CommonFromPushDataToFile.InsertToJson({
        inFolderName: LocalinFolderName,
        inFileNameOnly: LocalinFileNameOnly,
        inDataPK: LocalinDataPK,
        inDataToUpdate: LocalFromCommonFromCheck.JsonData,
        inOriginalData: ""
    });
    console.log("LocalFromPush : ", LocalFromPush);
    LocalReturnData.KTF = true;
    //    LocalReturnData.JsonData = LocalFromCommonFromCheck.JsonData[LocalinItemName];


    return await LocalReturnData;
};

// console.log("ForExistence----- : ", ReturnAsArrayWithPKSortByPK({
//     inFolderName: "Transactions",
//     inFileNameOnly: "GST-SALES",
//     inItemName: "FERTLIZERS-GST--SALES",
//     inDataPK: 1024
// }).JsonData[0]);

module.exports = { StartFunc };
