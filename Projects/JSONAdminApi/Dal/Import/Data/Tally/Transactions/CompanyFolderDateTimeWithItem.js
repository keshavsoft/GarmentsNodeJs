//let CommonTemplateFromCommon = require("../../../../../../../Projects/Tally/Bulk/Insert/Transactions/TemplateFromCommon");
let CommonTemplateFromCommon = require("../../../../../../../Projects/Tally/Bulk/Insert/Transactions/CompanyAsFolder/DateTimeAsFile/ItemName/TemplateFromCommonWithItemName");

let EndPointPost = async ({ LocalUserPK, inFolderName, inFileName, inBodyData }) => {
    if (LocalUserPK > 0) {
        let LocalFromTally = await CommonTemplateFromCommon.FromPowerShell({
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