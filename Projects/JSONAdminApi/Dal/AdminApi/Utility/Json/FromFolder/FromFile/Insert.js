let DataSupply = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/Insert/Start");

let OnlyFile = async ({ inFolderName, inFileName, inDataPK }) => {
    let LocalDataPK = inDataPK

    if (LocalDataPK > 0) {
        return await DataSupply.InsertNew({ inFolderName, inFileName, inUserPK: inDataPK });
    };
};

module.exports = { OnlyFile };