let CommonUpdatekeys = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/ForTableInfo/ParentClasses/Table");

let Update =async ({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk }) => {
    if (inDataPk > 0) {
      return await  CommonUpdatekeys.FuncStart({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk});
    };
};

module.exports = { Update };