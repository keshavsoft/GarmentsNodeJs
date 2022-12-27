let UserNameToPKRet = require("../../../../CommonData/Users/NameToPK");
let CommonData = require("../../../../CommonData/Admin/Reports/TableInfo/Update");

let Update = ({ inJsonConfig, inReportConfig, inObjectToUpdate, inQueryObject, inUserName, callback }) => {
    let LocalUserPK = UserNameToPKRet.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {

        CommonData.PushData({ inJsonConfig, inReportConfig, inUserPK: LocalUserPK,  inObjectToUpdate, inQueryObject }).then((PromiseData) => {
            callback(PromiseData, null);
        });
    };
};

module.exports = { Update };