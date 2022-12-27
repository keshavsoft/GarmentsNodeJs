let DataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/Insert/Start")

let Insert = async ({ inJsonConfig, inItemName, inScreenName, inDataPK }) => {
    LocalDataPK = inDataPK
    if (LocalDataPK > 0) {
        return await DataSupply.Insert({ inJsonConfig, inItemName, inScreenName, inUserPK: inDataPK })
    }

};

module.exports = { Insert };