let _ = require("lodash");

let CommonPullData = require("../PullData/FromJson");

let StartFunc = async ({ inUserName, inPassWord, inFirmName }) => {
    let LocalUserName = inUserName;
    let LocalPassword = inPassWord;
    let LocalFirmName = inFirmName;

    let LocalReturnData = { KTF: false, DirPath: "", FilePath: "", CreatedLog: {} };

    let LocalFromPullData = await CommonPullData.AsAsync();
    let LocalUserKeyNeeded = _.findKey(LocalFromPullData, { "UserName": LocalUserName, "PassWord": LocalPassword });

    if (LocalUserKeyNeeded === undefined) {
        LocalReturnData.KReason = `${inUserName} and password not found!`;
        return await LocalReturnData;
    };

    let LocalDataPK = _.findKey(LocalFromPullData[LocalUserKeyNeeded].ConnectedDatas, { "FirmName": LocalFirmName });
    
    if (LocalDataPK === undefined) {
        LocalReturnData.KReason = `${inFirmName} not found!`;
        return await LocalReturnData;
    };

    LocalReturnData.kPK = LocalDataPK;
    LocalReturnData.KTF = true;

    return await LocalReturnData;
};

let LocalMockFuncStartFunc = async () => {
    console.log("ssssssss : ", await StartFunc({ inUserName: "ABS", inPassword: "ABS", inFirmName: "ABS IMPEX-CHENNAI" }));

};


// LocalMockFuncStartFunc().then(p => {

// })

module.exports = { StartFunc };