//let CommonData = require("../../../../CommonData/Reports/Duplicate/Items");
let CommonDisplay = require("../../../../../../DataSupply/Reports/Duplicate/Items");

let Single = async ({ inJsonConfig, inFromName, inToName, inDataPK }) => {
    return await CommonDisplay.Single({
        inJsonConfig, inFromName, inToName,
        inUserPK: inDataPK
    });
};

module.exports = { Single };