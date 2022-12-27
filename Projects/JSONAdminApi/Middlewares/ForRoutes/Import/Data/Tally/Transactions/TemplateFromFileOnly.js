let Dal = require("../../../../../Dal/Import/Data/Tally/Transactions/TemplateFromFileOnly");

exports.EndPointPost = async ({ LocalUserPK, inFolderName, inFileName, inBodyData }) => {
    return await Dal.EndPointPost({ LocalUserPK, inFolderName, inFileName, inBodyData });
};