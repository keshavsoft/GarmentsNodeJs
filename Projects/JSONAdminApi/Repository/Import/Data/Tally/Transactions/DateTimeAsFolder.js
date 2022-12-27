let Dal = require("../../../../../Dal/Import/Data/Tally/Transactions/DateTimeAsFolder");

exports.EndPointPost = async ({ LocalUserPK, inFolderName, inFileName, inBodyData }) => {
    return await Dal.EndPointPost({ LocalUserPK, inFolderName, inFileName, inBodyData });
};