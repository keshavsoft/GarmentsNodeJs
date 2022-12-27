let _ = require("lodash");

let debug = require("debug")("KS18");
let GlobalUserNameToPK = require("../../../CommonData/Users/NameToPK");
let GlobalCommonData = require("../../../CommonData/Admin/Reports/LedgerAuto/TableColumns/ShowData");
let CommonPullDataReports = require("../../../CommonData/Fs/PullData/Reports");

let VouchersConsider = ({ inJsonConfig, inReportConfig, inUserName, inQueryObject, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        let LocalReturnObject = GlobalCommonData.CommonFunc({ inJsonConfig, inReportConfig, inUserPK: LocalUserPK, inQueryObject });

        callback(LocalReturnObject, null);
    };
};

let Columns = ({ inJsonConfig, inItemConfig, inUserName, inQueryObject, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        let LocalReturnObject = GlobalCommonData.CommonFunc({ inJsonConfig, inItemConfig, inUserPK: LocalUserPK, inQueryObject });

        callback(LocalReturnObject, null);
    };
};


let JoinTables = ({ inJsonConfig, inItemConfig, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        let LocalJoinTablesData;
        let LocalVouchersConsider = "VouchersConsider";
        let LocalVouchersConsiderFindObject = { pk: 0 };

        let LocalItemName = inItemConfig.inItemName;
        let LocalPkName = inItemConfig.inPkName;
        let LocalinJoinTablesSelected = inItemConfig.inJoinTablesSelected;
        LocalVouchersConsiderFindObject.pk = parseInt(LocalPkName);

        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig, inUserPK: LocalUserPK });
        LocalVouchersConsiderArray = _.find(LocalDataFromJSON[LocalItemName][LocalVouchersConsider], LocalVouchersConsiderFindObject);
        LocalJoinTablesData = _.get(LocalVouchersConsiderArray.JoinTables[0], `${LocalinJoinTablesSelected}.JsonConfig`);

        callback(LocalJoinTablesData, null);
    };
};
module.exports = { VouchersConsider, Columns, JoinTables };