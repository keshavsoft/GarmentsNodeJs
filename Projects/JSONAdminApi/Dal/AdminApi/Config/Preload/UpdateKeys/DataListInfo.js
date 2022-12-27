let CommonUpdatekeys = require("../../../../../../../DataSupply/Fs/PreLoad/UpdateKeys/DataListInfo");


let Update =async ({ inDataPk,inObjectToUpdate }) => {
    if (inDataPk > 0) {
      return await  CommonUpdatekeys.FuncStart({ inDataPk,inObjectToUpdate });
    };
};

module.exports = { Update };