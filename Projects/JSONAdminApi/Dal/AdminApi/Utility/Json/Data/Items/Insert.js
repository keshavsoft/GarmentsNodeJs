let CommonItems = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Insert/Start");

let Insert = async ({ inJsonConfig, inToName, inUserName }) => {
    if (inDataPk > 0) {
        return await CommonItems.Insert({ inJsonConfig, inToName, inUserPK: inDataPk });
    };
};

let Bulk = async ({ inJsonConfig, inBody, inUserPK }) => {
  //  return await CommonData.Bulk({ inJsonConfig, inBody, inUserPK });
};

module.exports = { Insert, Bulk };