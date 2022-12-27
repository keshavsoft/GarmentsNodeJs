let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Data/Items/Insert");

exports.Insert = async ({ inJsonConfig, inToName, inDataPk }) => {
    return await Dal.Insert({ inJsonConfig, inToName, inDataPk });
};

exports.Bulk = async ({ inJsonConfig, inBody, inUserPK }) => {
    return await Dal.Bulk({ inJsonConfig, inBody, inUserPK });
};


