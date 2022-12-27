// let CommonData = require("../../../../../../../DataSupply");

let TransformBeforeSave = async ({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inTableColumnName, inDataPk }) => {
    console.log("uuuuuuuuuu");
    let LocalUserPK = inDataPk;

    if (LocalUserPK > 0) {
        await CommonData.PullData({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inTableColumnName, inDataPk });

    };
};

let Update = async ({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inTableColumnName, inDataPk }) => {
    console.log("mmmmmmmmm");
    let LocalUserPK = inDataPk;

    if (LocalUserPK > 0) {
        await CommonData.PullData({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inTableColumnName, inDataPk });

    };
};

module.exports = { TransformBeforeSave, Update };