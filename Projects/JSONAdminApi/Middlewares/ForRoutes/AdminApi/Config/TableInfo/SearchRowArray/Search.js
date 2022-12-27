let Dal = require("../../../../../Dal/AdminApi/Config/TableInfo/SearcRowArray/Search");

exports.Update = async({ inDataPk, inJsonConfig, inItemConfig, inObjectToUpdate }) => {
  return await  Dal.Update({ inDataPk, inJsonConfig, inItemConfig, inObjectToUpdate })
}