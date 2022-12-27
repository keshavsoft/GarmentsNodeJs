let GlobalUserNameToPK = require("../../../../CommonData/Users/NameToPK");
let CommonDataSupply = require("../../../../../../DataSupply/Fs/Reports/Tabular/VouchersConsider");

let AsTree = async ({ inUserName }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });

    if (LocalUserPK > 0) {
        let LocalReturnData = await CommonDataSupply.startfunc({ inUserPK: LocalUserPK });
        return await LocalReturnData;
    };
};

let Toggles = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        let LocalReturnData = await CommonDataSupply.Toggles({ inUserPK });
        return await LocalReturnData;
    };
};

module.exports = { AsTree, Toggles };