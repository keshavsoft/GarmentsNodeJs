let CommonFromCreateFolder = require("../CreateFolder/FromInput");
let CommonFromUserJsonFile = require("../UserJsonFile/Check");
let CommonFromAsBulk = require("../UserJsonFile/PushDataToFile/AsBulk.js");

let LocalReturnRowCount = ({ inPostData }) => {
    let LocalRowCount = 0;
    if (Object.values(inPostData).length > 0) {
        LocalRowCount = Object.keys(Object.values(inPostData)[0]).length;
    };

    return LocalRowCount;
};

let StartFunc = async ({ inFolderName, inFileName, inData, inDataPK }) => {
    let LocalinDataPK = inDataPK;
    let LocalFolderName = inFolderName;
    let LocalFileName = inFileName;
    let LocalPostData = inData;

    let LocalReturnData = { KTF: false, DirPath: "", CreatedLog: {} };

    let LocalFromCommonFromCheck = CommonFromCreateFolder.StartFunc({
        inDataPK: LocalinDataPK,
        inFolderName: LocalFolderName
    });

    if (LocalFromCommonFromCheck.KTF || LocalFromCommonFromCheck.AlreadrPresent) {
        let LocalFromCommonFromUserJsonFile = CommonFromUserJsonFile.ForExistence({
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileName,
            inDataPK: LocalinDataPK
        });

        if (LocalFromCommonFromUserJsonFile.KTF) {
            LocalReturnData.KReason = "File already present";

            return LocalReturnData;
        };

        let LocalFromCommonFromAsBulk = await CommonFromAsBulk.CreateFileWithData({
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileName,
            inDataPK: LocalinDataPK,
            inData: LocalPostData
        });

        if (LocalFromCommonFromAsBulk.KTF == false) {
            LocalReturnData.KReason = LocalFromCommonFromAsBulk.KReason;

            return LocalReturnData;
        };

        let LocalRowCount = LocalReturnRowCount({ inPostData: LocalPostData });

        LocalReturnData.KResult = `FileName : ${inFileName} : ${LocalRowCount} inserted with data...`;
        LocalReturnData.KTF = true;
    };

    return LocalReturnData;
};

let LocalMockFuncForStartFunc = async () => {
    let LocalFromStartFunc = await StartFunc({
        inFolderName: "Masters",
        inDataPK: 601,
        inFileName: "AccountGroup1Names",
        inData: {
            k1: "value1"
        }
    });
    console.log("LocalFromStartFunc : ", LocalFromStartFunc);
};

// console.log("ForExistence : ", ForExistence({
//     inFolderName: "Masters",
//     inDataPK: 16
// }));

//LocalMockFuncForStartFunc().then();

module.exports = { StartFunc };
