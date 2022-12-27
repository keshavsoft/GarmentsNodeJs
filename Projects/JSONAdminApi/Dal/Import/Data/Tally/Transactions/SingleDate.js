let CommonTemplateFromCommon = require("../../../../../../../Projects/Tally/Bulk/Insert/Transactions/ToDataFolderOnly");

let WithOutConfig = async ({ LocalUserPK, inFolderName, inFileName, inBodyData }) => {
   // console.log("dal-----------");
    if (LocalUserPK > 0) {
        let LocalFromTally = await CommonTemplateFromCommon.CurrentDateAsItemName({
            inFolderName,
            inFileName,
            inBody: inBodyData,
            inUserPK: LocalUserPK
        });

        return await LocalFromTally;
    };
};

module.exports = {
    WithOutConfig
};