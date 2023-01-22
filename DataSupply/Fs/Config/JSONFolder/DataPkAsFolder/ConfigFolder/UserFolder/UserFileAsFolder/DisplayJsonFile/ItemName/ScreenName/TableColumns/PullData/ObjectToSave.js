let CommonFromWithInsertTrue = require("./WithInsertTrue");
let _ = require("lodash");

let StartFunc = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK }) => {
    let LocalDataPK = inDataPK;

    let LocalReturnObject = {
        KTF: false,
        JsonData: {}
    };

    if (LocalDataPK > 0) {
        let LocalFromCommonFromWithInsertTrue;
        let LocalFolderName = inFolderName;
        let LocalFileNameWithExtension = inFileNameWithExtension;
        let LocalinItemName = inItemName;
        let LocalinScreenName = inScreenName;

        LocalFromCommonFromWithInsertTrue = await CommonFromWithInsertTrue.StartFunc({
            inFolderName: LocalFolderName,
            inFileNameWithExtension: LocalFileNameWithExtension,
            inItemName: LocalinItemName,
            inScreenName: LocalinScreenName,
            inDataPK: LocalDataPK
        });
       // console.log("bbbbbbbbbbb--- : ", LocalFromCommonFromWithInsertTrue);
        if (LocalFromCommonFromWithInsertTrue.KTF === false) {
            LocalReturnObject.KReason = LocalFromCommonFromWithInsertTrue.KReason;
            return await LocalReturnObject;
        };

        LocalReturnObject.JsonData = {};

        _.forEach(LocalFromCommonFromWithInsertTrue.JsonData, (LoopItem) => {
            switch (LoopItem.DefaultValue) {
                case "Object":
                    LocalReturnObject.JsonData[LoopItem.DataAttribute] = {};
                    break;

                default:
                    LocalReturnObject.JsonData[LoopItem.DataAttribute] = LoopItem.DefaultValue;
                    break;
            };
        });

        //  LocalReturnObject.JsonData = LocalFromCommonFromCheck.JsonData[LocalinScreenName];
        LocalReturnObject.KTF = true;
    };

    return await LocalReturnObject;
};

let LocalMockFuncForStartFunc = async () => {
    let LocalResult = await StartFunc({
        inFolderName: "Purchases",
        inFileNameWithExtension: "Vouchers.json",
        inItemName: "VouchersName",
        inScreenName: "Create",
        inDataPK: 901
    });

    console.log("LocalResult : ", LocalResult.JsonData);
};

//LocalMockFuncForStartFunc().then();

module.exports = {
    StartFunc
};