let CommonDataSupply = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/ForSubTableColumns/Update/DataAttributes");

let Update = async ({ inJsonConfig, inItemConfig, inTableColumnName, inObjectToUpdate, inQueryObject, inDataPk }) => {
    return await CommonDataSupply.UpdateKeys({ inJsonConfig, inItemConfig, inTableColumnName, inObjectToUpdate, inQueryObject, inDataPk });
};

module.exports = { Update };