let CommonUpdatekeys = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/ForSubTableColumns/TableInfo/ParentClasses/Table");

let Update =async ({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk }) => {
  // console.log("-kdkdkdkdk",inDataPk);
    if (inDataPk > 0) {
      return await  CommonUpdatekeys.FuncStart({ inJsonConfig, inItemConfig, inObjectToUpdate, inDataPk});
    };
};

module.exports = { Update };