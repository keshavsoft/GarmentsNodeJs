let CommonData = require("../../../../../CommonData/Reports/Duplicate/VouchersConsider/Columns");

let Single = async ({  inPkName, inItemName, inFromName, inToName, inUserName, callback }) => {
    return await CommonData.Single({  inPkName, inItemName, inFromName, inToName, inUserName });
};

module.exports = { Single };