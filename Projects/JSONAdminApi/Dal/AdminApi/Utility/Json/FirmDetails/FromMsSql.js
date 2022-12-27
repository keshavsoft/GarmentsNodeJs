let CommonNew = require("../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/FirmDetailsJsonFile/PushDataToFile/ToJson");

let PostFunc = async ({ FirmName,
    FromDate,
    ToDate,
    AssYear,
    FinYear,
    PAN,
    GST, inDataPK }) => {
    let LocalReturnData = { KTF: false, KResult: [] };

    try {
        let LocalReturnFromItemsInsert = await CommonNew.StartFunc({
            inFirmName: FirmName,
            FromDate,
            ToDate,
            AssYear,
            FinYear,
            PAN,
            inDataPK
        });

        if (LocalReturnFromItemsInsert.KTF) {
            LocalReturnData.KTF = true;
        };
    } catch (error) {
        LocalReturnData.KError = error;
    };

    return LocalReturnData;
};

module.exports = {
    PostFunc
};
