let CommonPullDataAdmin = require("../../../Fs/PullData/Admin");
let GlobalUserNameToPK = require("../../../Users/NameToPK");

let debug = require("debug")("KS11");

let CommonColumnKey = "SubTableColumns";

let ReturnTableColumnData = ({ inJsonConfig, inItemConfig, inUserPK }) => {
    if (inUserPK > 0) {
        let LocalTableColumnData;

        let LocalItemName = inItemConfig.inItemName;
        let LocalScreenName = inItemConfig.inScreenName;

        let LocalDataFromJSON = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });

        LocalTableColumnData = LocalDataFromJSON[LocalItemName][LocalScreenName][CommonColumnKey];
        
        return LocalTableColumnData;
    };
};

let ReturnTableColumnDataElement = ({ inJsonConfig, inItemConfig, inUserName }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });

    if (LocalUserPK > 0) {
        let LocalColumnName = inItemConfig.inColumnName;

        let LocalTableColumnData = ReturnTableColumnData({ inJsonConfig, inItemConfig, inUserPK: LocalUserPK });
        
        let LocalColumnData = LocalTableColumnData.find((LoopItem) => { return LoopItem.DataAttribute === LocalColumnName });

        return LocalColumnData;
    };
};

module.exports = { ReturnTableColumnDataElement };