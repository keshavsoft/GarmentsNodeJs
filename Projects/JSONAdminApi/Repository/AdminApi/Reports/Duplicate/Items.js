let Dal = require("../../../../Dal/AdminApi/Reports/Duplicate/Items");

exports.Single = async ({ inJsonConfig, inFromName, inToName, inDataPK }) => {
    return await Dal.Single({
        inJsonConfig, inFromName, inToName, inDataPK
    });
};
