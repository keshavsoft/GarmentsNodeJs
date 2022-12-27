//let CommonData = require("../../../../../../../../CommonData/Utility/Json/Data/Config/SubTable/Columns/Insert");
//let GlobalUserNameToPK = require("../../../../../../../../CommonData/Users/NameToPK");
let CommonFs = require("../../../../../../../../../../DataSupply/Fs/Data/Config/SubTable/Columns/Insert");
//require("")
let Insert = ({ inJsonConfig, inItemConfig, inSubTableColumnName, inUserName }) => {
    return new Promise((resolve, reject) => {
        //let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
        if (inDataPk > 0) {

            CommonFs.Insert({ inJsonConfig, inItemConfig, inSubTableColumnName, inUserPK: inDataPk }).then(resolve).catch(reject);
        };
    });
};

module.exports = { Insert };
