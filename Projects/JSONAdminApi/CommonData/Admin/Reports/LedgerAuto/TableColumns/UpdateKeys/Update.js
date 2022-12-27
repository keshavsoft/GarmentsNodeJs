let CommonPullData = require("../../../../../Fs/PullData/Reports");
let _ = require("lodash");
let CommonPushDataReports = require("../../../../../Fs/PushData/Reports");

let JsonConfig = ({ inReportConfig, inUserPK, inColumnsPk, inObjectToUpdate }) => {
    return new Promise((resolve, reject) => {
        let LocalDataFromJSON = CommonPullData.PullDataReport({ inUserPK });
        let LocalUpdatedData = JSON.parse(JSON.stringify(LocalDataFromJSON));
        let LocalReportName = inReportConfig.inReportName;
        let LocalFindVouchersConsider;

        if (LocalReportName in LocalUpdatedData) {
            if ("VouchersConsider" in LocalUpdatedData[LocalReportName]) {
                LocalFindVouchersConsider = _.find(LocalUpdatedData[LocalReportName].VouchersConsider, { 'pk': inColumnsPk });

                if ("FolderName" in inObjectToUpdate) {
                    LocalFindVouchersConsider.FolderName = inObjectToUpdate.FolderName;
                };

                if ("FileName" in inObjectToUpdate) {
                    LocalFindVouchersConsider.FileName = inObjectToUpdate.FileName;
                };

                CommonPushDataReports.PushDataReport({
                    inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalUpdatedData
                }).then((PromiseData) => {
                    resolve(PromiseData);
                }).catch((error) => {
                    reject(error);
                });
            };
        };
    });
};

module.exports = { JsonConfig };