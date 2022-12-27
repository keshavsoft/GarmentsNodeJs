let CommonData = require("../../../../../CommonData/Utility/Json/PreLoad/Duplicate");
let GlobalUserNameToPK = require("../../../../../CommonData/Users/NameToPK");

let Single = ({ inFromName, inToName, inUserName }) => {
    return new Promise((resolve, reject) => {
        let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
        if (LocalUserPK > 0) {
            CommonData.Single({ inFromName, inToName, inUserPK: LocalUserPK }).then(resolve).catch(reject);
        };
    });
};

module.exports = { Single };