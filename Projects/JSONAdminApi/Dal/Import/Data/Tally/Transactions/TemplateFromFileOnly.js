let CommonTally = require("../../../../../../Tally/Bulk/Insert/Transactions/TimeStampAsFolder/TemplateFromFileOnly");

let EndPointPost = async ({ LocalUserPK, inFolderName, inFileName, inBodyData }) => {
    if (LocalUserPK > 0) {
        let LocalFromTally = await CommonTally.FromXmlBody({
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