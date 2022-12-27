let GlobalUserNameToPK = require("../../../../CommonData/Users/NameToPK");
let CommonDataSupply = require("../../../../../../DataSupply/Fs/Reports/Utilities/Fix");

let JSONParams = async ({ inReportName, inUserName }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });

    if (LocalUserPK > 0) {
        let LocalReturnData = await CommonDataSupply.FixAll({ inReportName, inUserPK: LocalUserPK });
        return await LocalReturnData;
    };
};


module.exports = { JSONParams };