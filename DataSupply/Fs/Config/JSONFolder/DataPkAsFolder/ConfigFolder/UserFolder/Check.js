let fs = require("fs");
let CommonFromCheck = require("../Check");

let ForExistence = ({ inFolderName, inDataPK }) => {
    let LocalinDataPK = inDataPK;
    let LocalReturnData = { KTF: false, DirPath: "", CreatedLog: {} };
    let LocalFromCommonFromCheck = CommonFromCheck.ForExistence({ inDataPK: LocalinDataPK });

    LocalReturnData.DirPath = LocalFromCommonFromCheck.DirPath;

    if (LocalFromCommonFromCheck.KTF === false) {
        LocalReturnData.KReason = LocalFromCommonFromCheck.KReason;
        return LocalReturnData;
    };

    LocalReturnData.FolderPath = `${LocalFromCommonFromCheck.DirPath}/${inFolderName}`

    try {
        if (fs.statSync(LocalReturnData.FolderPath).isDirectory()) {
            LocalReturnData.KTF = true;
        } else {
            LocalReturnData.KReason = "File not found!";
        }
    } catch (error) {
        LocalReturnData.KReason = error;
    };

    return LocalReturnData;
};

// console.log("ForExistence : ", ForExistence({
//     inFolderName: "Masters",
//     inDataPK: 16
// }));

module.exports = { ForExistence };
