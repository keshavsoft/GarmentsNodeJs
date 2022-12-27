 let DataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Insert/Start");

exports.Insert = async ({ inFolderName, inFileNameWithExtension, inItemName, inDataPK }) => {
    let LocalDataPK = inDataPK;
    if (LocalDataPK > 0) {
        return await DataSupply.FoldFileItem({ inFolderName, inFileNameWithExtension, inToName:inItemName, inDataPK });

    }

};
