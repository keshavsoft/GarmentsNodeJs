let Dal = require("../../../../../Dal/Import/Data/Tally/Transactions/TemplateFromCommon");

exports.EndPointPost = async ({ LocalUserPK, inFolderName, inFileName, inBodyData }) => {
    return await Dal.EndPointPost({ LocalUserPK, inFolderName, inFileName, inBodyData });
};