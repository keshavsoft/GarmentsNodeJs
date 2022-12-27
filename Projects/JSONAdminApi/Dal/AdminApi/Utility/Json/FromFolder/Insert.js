let DataSupply = require("../../../../../../../DataSupply/Fs/Config/Folders/Insert/Start");

let OnlyFolder = async ({ inFolderName, inDataPK }) => {
    let LocalDataPK = inDataPK

    if (LocalDataPK > 0) {
        return await DataSupply.OnlyFolder({ inToName: inFolderName, inUserPK: inDataPK });
    };
};

module.exports = { OnlyFolder };