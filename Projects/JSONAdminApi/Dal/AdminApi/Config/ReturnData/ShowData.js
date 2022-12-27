let GlobalUserNameToPK = require("../../../../CommonData/Users/NameToPK");
let CommonData = require("../../../../CommonData/Admin/Config/ReturnData/ShowData");


let ShowData = ({ inJsonConfig, inItemConfig, inUserName, inQueryObject, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        let LocalReturnObject = CommonData.PullData({ inJsonConfig, inItemConfig, inUserPK: LocalUserPK, inQueryObject });
        callback(LocalReturnObject, null);
    };
};

module.exports = { ShowData };