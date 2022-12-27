let CommonData = require("../../../../../CommonData/Utility/Json/Items/Insert");
let GlobalUserNameToPK = require("../../../../../CommonData/Users/NameToPK");
let CommonInsert = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Insert/Start");

let Insert = async ({ inJsonConfig, inToName, inUserName }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        return await CommonInsert.Insert({ inJsonConfig, inToName, inUserPK: LocalUserPK }).then(resolve).catch(reject);
    };
};

let Insert1 = ({ inJsonConfig, inToName, inUserName }) => {
    return new Promise((resolve, reject) => {
        let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
        if (LocalUserPK > 0) {
            CommonData.Insert({ inJsonConfig, inToName, inUserPK: LocalUserPK }).then(resolve).catch(reject);
        };
    });
};

module.exports = { Insert };