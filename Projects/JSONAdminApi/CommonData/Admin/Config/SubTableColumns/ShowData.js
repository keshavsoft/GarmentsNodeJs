let _ = require("lodash");
let debug = require("debug")("KS23");
let CommonPullDataAdmin = require("../../../Fs/PullData/Admin");
let TableColumnCheckData = require("../check");

let ReturnTableInfoDataWithKey = ({ inJsonConfig, inItemConfig, inUserPK }) => {
    let LocalDisplayData = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
    let LocalTableInfoData

    LocalTableInfoData = LocalDisplayData[inItemConfig.inItemName][inItemConfig.inScreenName].TableColumns[inItemConfig.inColumnName];

    return LocalTableInfoData;
};

let PullData = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject }) => {
    debug(" : ", inJsonConfig);
    let LocalDisplayData = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
    let LocalColumnData;
    LocalColumnData = TableColumnCheckData.PullData({ inItemConfig, inQueryObject, inDisplayData: LocalDisplayData });
    return LocalColumnData;
};

// let CommonFunc = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject }) => {
//     let LocalDisplayData = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
//     let LocalTableInfoData;
//     let LocalGetKeyArray = inQueryObject.split(".");


//     LocalTableInfoData = _.get(LocalDisplayData[inItemConfig.inItemName][inItemConfig.inScreenName].TableColumns[inItemConfig.inColumnName], LocalGetKeyArray);
//     debug("inQueryObject : ", LocalTableInfoData);

//     return LocalTableInfoData;
// };

module.exports = { ReturnTableInfoDataWithKey, PullData };