let Dal = require("../../../../../Dal/AdminApi/Reports/Duplicate/VouchersConsider/Columns");

exports.Single = async ({ inJsonConfig, inPkName, inItemName, inFromName, inToName, inUserName, callback }) => {
    return await Dal.Single({
        inJsonConfig, inPkName, inItemName, inFromName, inToName, inUserName
    });
};
