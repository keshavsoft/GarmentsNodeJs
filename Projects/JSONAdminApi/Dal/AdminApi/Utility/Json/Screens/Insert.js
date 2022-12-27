let CommonInsert = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/Insert/Start");

//let GlobalUserNameToPK = require("../../../../../CommonData/Users/NameToPK");

let Insert = ({ inJsonConfig, inItemName, inToName, inDataPK }) => {
    return new Promise((resolve, reject) => {
  //      let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
        if (inDataPK > 0) {
            CommonInsert.Insert({
                inJsonConfig,
                inItemName,
                inScreenName: inToName, 
                inUserPK:inDataPK
            }).then(resolve).catch(reject);

        };
    });
};

module.exports = { Insert };