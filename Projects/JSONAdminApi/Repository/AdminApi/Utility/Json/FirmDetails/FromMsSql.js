let Dal = require("../../../../../Dal/AdminApi/Utility/Json/FirmDetails/FromMsSql");

exports.PostFunc = async ({ FirmName,
    FromDate,
    ToDate,
    AssYear,
    FinYear,
    PAN,
    GST,
    inDataPK }) => {
        
    return await Dal.PostFunc({
        FirmName,
        FromDate,
        ToDate,
        AssYear,
        FinYear,
        PAN,
        GST,
        inDataPK
    });
};