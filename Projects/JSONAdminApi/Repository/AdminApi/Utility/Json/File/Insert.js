let Dal = require("../../../../../Dal/AdminApi/Utility/Json/File/Insert");

exports.Insert = ({ inJsonConfig, inToName, inUserName }) => {
    return new Promise((resolve, reject) => {
        Dal.Insert({ inJsonConfig, inToName, inUserName }).then(resolve).catch(reject);
    });
};

exports.FromParams = async ({ inFolderName, inFileNameWithExtension, inBody, inUserPK }) => {
    return await Dal.FromParams({ inFolderName, inFileNameWithExtension, inBody, inUserPK });
};

exports.Bulk = async ({ inFolderName, inBody, inUserPK }) => {
    return await Dal.Bulk({ inFolderName, inBody, inUserPK });
};

exports.BulkWithFileName = async ({ inFolderName, inFileNameWithExtension, inBody, inUserPK }) => {
    return await Dal.BulkWithFileName({ inFolderName, inFileNameWithExtension, inBody, inUserPK });
};

exports.TallyPeriod = async ({ inFolderName, inBody, inUserPK }) => {
    return await Dal.TallyPeriodGroupByVoucherName({ inFolderName, inBody, inUserPK });
};

exports.OnlyFile = async ({ inFolderName, inFileNameWithExtension, inUserPK }) => {
    return await Dal.OnlyFile({ inFolderName, inFileNameWithExtension, inUserPK });
};

exports.TallySingleDate = async ({ inFolderName, inBody, inUserPK }) => {
    return await Dal.TallySingleDate({ inFolderName, inBody, inUserPK });
};

exports.TallySingleDateWithConfigInsertAlso = async ({ inFolderName, inBody, inUserPK }) => {
    return await Dal.TallySingleDateWithConfigInsertAlso({ inFolderName, inBody, inUserPK });
};

exports.TallySingleDateWithConfigInsertAndFromTemplate = async ({ inFolderName, inBody, inUserPK }) => {
    return await Dal.TallySingleDateWithConfigInsertAndFromTemplate({ inFolderName, inBody, inUserPK });
};