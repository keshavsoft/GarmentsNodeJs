let _ = require("lodash");
let CommonPreloadAdmin = require("../../../../Fs/PullData/Preload");
let TableColumnCheckData = require("../../check");
let FromJsonConfigData = require("../../../../../../../DataSupply/Fs/PreLoad/Tabular/JsonConfig")

let PullData = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject }) => {

    let LocalConfigData = FromJsonConfigData.JsonConfig({ inUserPK });

    // console.log("LocalConfigData:", LocalConfigData);
    // console.log("inQueryObject-----:", inQueryObject);
    // let LocalDisplayData = CommonPreloadAdmin.FromJsonPreload({ inJsonConfig, inUserPK });
    // let LocalColumnData;
    // LocalColumnData = TableColumnCheckData.PullData({ inItemConfig, inQueryObject, inDisplayData: LocalDisplayData });
  

    return LocalConfigData;
};

module.exports = { PullData };