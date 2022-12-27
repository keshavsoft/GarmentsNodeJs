// let DataSupply = require("../../../../../../../../../../DataSupply");

exports.Insert = async ({ inFolderName, inFileNameWithExtension, inItemName, inDataPk }) => {
    console.log("lllllllllll");
    let LocalDataPK = inDataPk;
    if (LocalDataPK > 0) {
        return await DataSupply.Insert({ inFolderName, inFileNameWithExtension, inItemName, inDataPk });

    }

};
