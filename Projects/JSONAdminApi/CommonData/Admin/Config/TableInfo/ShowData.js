//let CommonPullDataAdmin = require("../../../Fs/PullData/Admin");
let CommonPullDataAdmin = require("../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Items/Screens/PullData/FromDisplayJson/KeysAsArray");

let ReturnTableInfoDataWithKey = ({ inJsonConfig, inItemConfig, inUserPK }) => {
    let LocalDisplayData = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
    let LocalTableInfoData

    LocalTableInfoData = LocalDisplayData[inItemConfig.inItemName][inItemConfig.inScreenName].TableInfo;

    return LocalTableInfoData;
};

module.exports = { ReturnTableInfoDataWithKey };