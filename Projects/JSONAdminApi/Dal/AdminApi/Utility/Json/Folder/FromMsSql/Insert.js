let CommonConfigBulk = require("../../../../../../../../DataSupply/Fs/Config/Folders/Insert/Bulk");

let Bulk = async ({ inToName, inBody, inDataPK }) => {
    if (inDataPK > 0) {
        return await CommonConfigBulk.Insert({ inToName, inBody, inUserPK: inDataPK });;
    };
};

let DataOnly = async ({ inToName, inBody, inDataPK }) => {
    if (inDataPK > 0) {
        return await CommonConfigBulk.InsertToDataOnly({ inToName, inBody, inUserPK: inDataPK });;
    };
};

module.exports = {
    Bulk,
    DataOnly
};