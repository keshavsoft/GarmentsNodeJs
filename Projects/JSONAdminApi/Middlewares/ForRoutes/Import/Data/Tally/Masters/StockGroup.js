let Dal = require("../../../../../Dal/Import/Data/Tally/Masters/StockGroup");

exports.FromXml = async ({ LocalUserPK, inFolderName, inFileName, inBodyData }) => {
    return await Dal.FromXml({ LocalUserPK, inFolderName, inFileName, inBodyData });
};

