let _ = require("lodash");

let debug = require("debug")("KS18");
let GlobalUserNameToPK = require("../../../../CommonData/Users/NameToPK");

let CommonPullDataReports = require("../../../../CommonData/Fs/PullData/Reports");
let CommonPushDataReports = require("../../../../CommonData/Fs/PushData/Reports");

let Columns = ({ inJsonConfig, inItemConfig, inUserName, callback }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {
        let LocalVouchersConsider = "VouchersConsider";
        let LocalColumns = "Columns";
        let LocalDataToBeInserted;

        let LocalItemName = inItemConfig.inItemName;
        let LocalPkName = parseInt(inItemConfig.inPkName);
        let LocalColumnsPk = parseInt(inItemConfig.inColumnsPk);

        let LocalDataFromJSON = CommonPullDataReports.PullDataReport({ inUserPK: LocalUserPK });
        LocalDataToBeInserted = LocalDataFromJSON;

        LocalVouchersConsiderArray = _.find(LocalDataToBeInserted[LocalItemName][LocalVouchersConsider], { pk: LocalPkName });

        LocalVouchersConsiderArray[LocalColumns] = LocalVouchersConsiderArray[LocalColumns].filter((LoopItem) => {
            return LoopItem.pk !== LocalColumnsPk;
        });

        CommonPushDataReports.PushDataReport({ inJsonConfig, inUserPK: LocalUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalDataToBeInserted }).then((PromiseData) => {
            callback(PromiseData, null);
        });
    };
};

module.exports = { Columns };