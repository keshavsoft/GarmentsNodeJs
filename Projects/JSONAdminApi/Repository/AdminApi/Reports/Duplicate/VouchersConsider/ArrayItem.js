let Dal = require("../../../../../Dal/AdminApi/Reports/Duplicate/VouchersConsider/ArrayItem");

exports.Single = async ({ inJsonConfig, inItemName, inFromName, inToName, inUserName, callback }) => {
    return await Dal.Single({
        inJsonConfig, inItemName, inFromName, inToName, inUserName
    });
};
