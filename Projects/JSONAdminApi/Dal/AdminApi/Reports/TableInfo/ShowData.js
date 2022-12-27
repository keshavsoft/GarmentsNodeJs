let _ = require("lodash");
let debug = require("debug")("KS9");
let GlobalUserNameToPK = require("../../../../CommonData/Users/NameToPK");
let CommonData = require("../../../../CommonData/Admin/Reports/TableInfo/ShowData");

let ShowData = ({ inReportConfig, inUserName, inQueryObject, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        let LocalReturnObject = CommonData.CommonFunc({ inReportConfig, inUserPK: LocalUserPK, inQueryObject });
        callback(LocalReturnObject, null);
    };
};

module.exports = { ShowData };