let CommonData = require("../../../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/TableColumns/Insert/Start");

let Insert = async ({ inJsonConfig, inItemConfig, inColumnName, inDataPK }) => {

    let LocalinDataPK= inDataPK;

    if (LocalinDataPK > 0) {

        return await CommonData.Insert({ inJsonConfig, inItemConfig, inColumnName, inUserPK: inDataPK });
    };

};

module.exports = { Insert };
