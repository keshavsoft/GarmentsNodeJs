let Dal = require("../../../../../Dal/AdminApi/Utility/Json/Folder/Insert");

exports.Insert = async ({ inToName, inDataPK }) => {
    return await Dal.Insert({ inToName, inDataPK });
};

exports.OnlyFolder = async ({ inToName, inDataPK }) => {
    return await Dal.OnlyFolder({ inToName, inDataPK });
};

exports.Bulk = async ({ inToName, inBody, inDataPK }) => {
    return await Dal.Bulk({ inToName, inBody, inDataPK });
};

exports.WithoutTemplate = async ({ inToName, inDataPK }) => {
    return await Dal.WithoutTemplate({ inToName, inDataPK });
};