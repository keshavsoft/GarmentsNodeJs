let _ = require("lodash");
let debug = require("debug")("KS23");
let CommonPreloadAdmin = require("../../../Fs/PullData/Preload");
let TableColumnCheckData = require("../check");

let PullData1 = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject }) => {
    let LocalDisplayData = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
    let LocalColumnData;
   let CommonColumnKey="TableColumns";
    LocalTableColumnData = LocalDisplayData[inItemConfig.inItemName][inItemConfig.inScreenName][CommonColumnKey];

    if (inQueryObject === "") {
        LocalColumnData = LocalTableColumnData.find((LoopItem) => { return LoopItem.DataAttribute === inItemConfig.inColumnName });


    } else {
        let LocalGetKeyArray = inQueryObject.split(".");
        LocalKeyData = LocalTableColumnData.find((LoopItem) => { return LoopItem.DataAttribute === inItemConfig.inColumnName });
        LocalColumnData = _.get(LocalKeyData, LocalGetKeyArray[1]);

    }

    return LocalColumnData;

};

let PullData = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject }) => {
    let LocalDisplayData = CommonPreloadAdmin.FromJsonPreload({ inJsonConfig, inUserPK });
    let LocalColumnData;
    LocalColumnData = TableColumnCheckData.PullData({ inItemConfig, inQueryObject, inDisplayData: LocalDisplayData });
    return LocalColumnData;
};

module.exports = { PullData };