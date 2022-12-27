let CommonData = require("../../../../CommonData/Reports/Duplicate/Screens");
let GlobalUserNameToPK = require("../../../../CommonData/Users/NameToPK");
let GlobalCommonPullData = require("../../../../CommonData/Fs/PullData/Admin");

let Single = ({ inJsonConfig, inItemName, inFromName, inToName, inUserName, callback }) => {
    let LocalReturnData = CommonData.Single({ inJsonConfig, inItemName, inFromName, inToName, inUserName });
    callback(LocalReturnData, null);
};

module.exports = { Single };