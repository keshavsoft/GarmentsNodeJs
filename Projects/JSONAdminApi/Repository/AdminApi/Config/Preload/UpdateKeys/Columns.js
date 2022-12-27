let dal = require("../../../../../Dal/AdminApi/Config/Preload/UpdateKeys/Columns");

exports.Update = async ({ inDataPk, inObjectToUpdate }) => {
  console.log("inObjectToUpdate:",inObjectToUpdate);
  return await dal.Update({ inDataPk, inObjectToUpdate });
};