let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/File/FromMsSql/Insert");

exports.BulkWithFileNameToDataOnly = async ({ inFolderName, inFileNameWithExtension, inBody, inUserPK }) => {
    return await Dal.BulkWithFileNameToDataOnly({ inFolderName, inFileNameWithExtension, inBody, inUserPK });
};
