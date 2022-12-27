let CommonUpdatekeys = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/ForTableInfo/TableRowOptions/PrintToPrinter");

let Update =async ({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk }) => {
    if (inDataPk > 0) {
      return await  CommonUpdatekeys.FuncStart({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk});
    };
};

module.exports = { Update };