//let CommonData = require("../../../../../CommonData/Utility/Json/Folder/Insert");
//let GlobalUserNameToPK = require("../../../../../CommonData/Users/NameToPK");
//let CommonFs = require("../../../../../../../DataSupply/Fs/Config/Folders/Insert/Start");
let CommonConfigBulk = require("../../../../../../../DataSupply/Fs/Config/Folders/Insert/Bulk");
let CommonData = require("../../../../../../../DataSupply/Fs/Config/Folders/Insert/ToDataFolder");

let Insert = async ({ inToName, inDataPK }) => {
    //let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });

    if (inDataPK > 0) {
        return await CommonData.CreateDataFolder({ inToName, inUserPK: inDataPK });
    };
};

let OnlyFolder = async ({ inToName, inDataPK }) => {
    if (inDataPK > 0) {
        //      return await CommonData.CreateDataFolder({ inToName, inUserPK: inDataPK });;

        return await CommonData.CreateDataFolder({ inFolderName: inToName, inUserPK: inDataPK });
    };
};

let Bulk = async ({ inToName, inBody, inDataPK }) => {
    if (inDataPK > 0) {
        return await CommonConfigBulk.Insert({ inToName, inBody, inUserPK: inDataPK });;
    };
};

let WithoutTemplate = async ({ inToName, inDataPK }) => {
    if (inDataPK > 0) {
        return await CommonData.CreateDataFolder({ inToName, inUserPK: inDataPK });;
    };
};

module.exports = {
    Insert, OnlyFolder, Bulk,
    WithoutTemplate
};