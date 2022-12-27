let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/FromMsSql/Insert");

exports.Bulk = async ({ inToName, inBody, inDataPK }) => {
    return await Dal.Bulk({ inToName, inBody, inDataPK });
};

exports.DataOnly = async ({ inToName,inBody, inDataPK }) => {
    return await Dal.DataOnly({ inToName,inBody, inDataPK });
};