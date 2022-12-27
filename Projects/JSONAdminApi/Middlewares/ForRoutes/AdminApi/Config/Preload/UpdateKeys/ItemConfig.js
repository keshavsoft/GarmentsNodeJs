let dal = require("../../../../../Dal/AdminApi/Config/Preload/UpdateKeys/ItemConfig");

exports.Update = async ({ inDataPk, inObjectToUpdate }) => {
  return await dal.Update({ inDataPk, inObjectToUpdate });
};