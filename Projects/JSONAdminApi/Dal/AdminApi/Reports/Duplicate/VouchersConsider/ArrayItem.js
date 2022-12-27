let CommonData = require("../../../../../CommonData/Reports/Duplicate/VouchersConsider/ArrayItem");

let Single = async ({ inJsonConfig, inItemName, inFromName, inToName, inUserName, callback }) => {
    return await CommonData.Single({ inJsonConfig, inItemName, inFromName, inToName, inUserName });
};

module.exports = { Single };