let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/FromFolder/FromFile/Insert");

exports.OnlyFile = async ({ inFolderName, inFileName, inDataPK }) => {
    return await Dal.OnlyFile({ inFolderName, inFileName, inDataPK });
};
