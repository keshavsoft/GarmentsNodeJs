let CommonUpdatekeys = require("../../../../../../../DataSupply/Fs/PreLoad/UpdateKeys/ItemConfig");

let Update = async ({ inDataPk, inObjectToUpdate }) => {
  if (inDataPk > 0) {
    return await CommonUpdatekeys.FuncStart({ inDataPk, inObjectToUpdate });
  };
};

module.exports = { Update };