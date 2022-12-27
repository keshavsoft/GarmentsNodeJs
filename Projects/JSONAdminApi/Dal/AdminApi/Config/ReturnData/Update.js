const { request } = require("express");
let _ = require("lodash");
let debug = require("debug")("KS8");
let UserNameToPKRet = require("../../../../CommonData/Users/NameToPK");
let CommonData = require("../../../../CommonData/Admin/Config/ReturnData/Update");

let Update = ({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inUserName, callback }) => {
    let LocalUserPK = UserNameToPKRet.UserNameToPKRet({ inUserName });
    if (LocalUserPK > 0) {

        CommonData.PushData({ inJsonConfig, inItemConfig, inUserPK: LocalUserPK, inObjectToUpdate, inQueryObject }).then((PromiseData) => {
            callback(PromiseData, null);
        })

    };
};



module.exports = { Update };