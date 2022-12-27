let CommonDataSupply = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/TableColumns/Update/DisplayOrder");

let Update = async ({ inJsonConfig, inItemConfig, inTableColumnName, inObjectToUpdate, inQueryObject, inDataPk, callback }) => {
    return await CommonDataSupply.UpdateKeys({ inJsonConfig, inItemConfig, inTableColumnName, inObjectToUpdate, inQueryObject, inDataPk, callback });
};

module.exports = { Update };