let _ = require("lodash");
let debug = require("debug")("KS23");
let CommonPullDataAdmin = require("../../../../Fs/PullData/Admin");

let PullFunc = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject }) => {
    let LocalDisplayData = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });
    let LocalTableInfoData;
    let LocalGetKeyArray = inQueryObject.split(".");

    LocalTableInfoData = _.get(LocalDisplayData[inItemConfig.inItemName][inItemConfig.inScreenName], LocalGetKeyArray);
    debug("inQueryObject : ", LocalTableInfoData);

    return LocalTableInfoData;
};

module.exports = { PullFunc };