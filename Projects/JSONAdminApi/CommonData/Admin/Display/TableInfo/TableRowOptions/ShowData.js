let CommonPullDataAdmin = require("../../../../Fs/PullData/Admin");
let GlobalUserNameToPK = require("../../../../Users/NameToPK");
let _ = require("lodash");

let debug = require("debug")("KS11");

let CommonColumnKey = "TableInfo";

let ReturnTableInfoData = ({ inJsonConfig, inItemConfig, inUserPK }) => {
    if (inUserPK > 0) {
        let LocalTableInfoData;

        let LocalItemName = inItemConfig.inItemName;
        let LocalScreenName = inItemConfig.inScreenName;

        let LocalDataFromJSON = CommonPullDataAdmin.DisplayJson({ inJsonConfig, inUserPK });

        LocalTableInfoData = LocalDataFromJSON[LocalItemName][LocalScreenName][CommonColumnKey];

        return  LocalTableInfoData;
    };
};

let ReturnTableColumnDataElement = ({ inJsonConfig, inItemConfig, inUserName, inKeyName }) => {
    let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
let LocalDatatoReturn;
    if (LocalUserPK > 0) {
        let  LocalTableInfoData = ReturnTableInfoData({ inJsonConfig, inItemConfig, inUserPK: LocalUserPK });
       if (inKeyName === undefined){
        LocalDatatoReturn = LocalTableInfoData;
       }
       else{
         LocalDatatoReturn = _.get( LocalTableInfoData, inKeyName)
       }
        return LocalDatatoReturn;
    };
};

module.exports = { ReturnTableColumnDataElement };