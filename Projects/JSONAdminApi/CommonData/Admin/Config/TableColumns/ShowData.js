let CommonPullDataAdmin = require("../../../../../../DataSupply/Fs/DefultFileNames/Display/PullData");
//let TableColumnCheckData = require("../check");
let TableColumnCheckData = require("../../../../../../DataSupply/Fs/GeneralFuns/UseKQueryObject/check");

let PullData = ({ inJsonConfig, inItemConfig, inUserPK, inQueryObject }) => {
    let LocalDisplayData = CommonPullDataAdmin.ReturnDataFromJson({ inJsonConfig, inUserPK });
    let LocalColumnData;
    
    LocalColumnData = TableColumnCheckData.PullData({ inItemConfig, inQueryObject, inDisplayData: LocalDisplayData });
    return LocalColumnData;
};

module.exports = { PullData };