let _ = require("lodash");
let debug = require("debug")("KS23");
let CommonPullDataAdmin = require("../../../Fs/PullData/Admin");
let TableColumnCheckData = require("../check");

let PullData = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject }) => {
    let LocalDisplayData = CommonPullDataAdmin.ReturnDataJson({ inJsonConfig, inUserPK });
    let LocalColumnData;
    LocalColumnData = TableColumnCheckData.PullData({ inItemConfig, inQueryObject, inDisplayData: LocalDisplayData });
    return LocalColumnData;
};

module.exports = { PullData };