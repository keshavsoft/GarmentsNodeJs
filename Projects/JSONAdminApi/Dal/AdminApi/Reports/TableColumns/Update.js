let _ = require("lodash");
//let CommonPullDataReports = require("../../../../CommonData/Admin/Reports/LedgerAuto/TableColumns/UpdateKeys/Update");
let CommonPullDataReports = require("../../../../../../DataSupply/Fs/Reports/LedgerAuto/VouchersConsider/UpdateKeys/Update");

let DisplayType = ({ inReportConfig, inObjectToUpdate, inDataPk, inColumnsPk, callback }) => {
    let LocalReturnData;

    if (inDataPk > 0) {
        LocalReturnData = CommonPullDataReports.JsonConfig({
            inReportConfig, inUserPK: inDataPk,
            inObjectToUpdate,
            inColumnsPk
        }).then(PromiseData => {
            callback(PromiseData, null);
        }).catch();
    };
};

module.exports = { DisplayType };