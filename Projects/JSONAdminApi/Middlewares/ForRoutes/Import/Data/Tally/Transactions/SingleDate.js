let Dal = require("../../../../../Dal/Import/Data/Tally/Transactions/SingleDate");

exports.WithOutConfig = async ({ LocalUserPK, inFolderName, inFileName, inBodyData }) => {
    return await Dal.WithOutConfig({ LocalUserPK, inFolderName, inFileName, inBodyData });
};