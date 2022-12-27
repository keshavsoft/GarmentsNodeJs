let GlobalUserNameToPK = require("../../../../CommonData/Users/NameToPK");
let CommonPullDataReports = require("../../../../CommonData/Fs/PullData/Reports");

let debug = require("debug")("KS15");

let ShowItemNames = ({ inReportName, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });

    if (LocalUserPK > 0) {
        let LocalJsonConfig = {
            inFolderName: "Reports",
            inFileName: "LedgerAuto.json"
        };

        let LocalReturnArray;
        let LocalColumnData;

        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inJsonConfig: LocalJsonConfig, inUserPK: LocalUserPK });

        LocalColumnData = LocalDataFromJSON[inReportName]["TableColumns"];

        LocalReturnArray = LocalColumnData.map((LoopItem) => {
            return [LoopItem.pk, LoopItem.DataAttribute];
        });

        callback(LocalReturnArray, null);
    };
};


module.exports = { ShowItemNames };