let CommonTally = require("../../../../../../Tally/Bulk/Insert/Transactions/DateTimeAsFolder");

let EndPointPost = async ({ LocalUserPK, inFolderName, inFileName, inBodyData }) => {
    if (LocalUserPK > 0) {
        let LocalFromTally = await CommonTally.FromPowerShell({
            inFolderName,
            inFileName,
            inBody: inBodyData,
            inUserPK: LocalUserPK
        });
        
        return await LocalFromTally;
    };
};

module.exports = {
    EndPointPost
};