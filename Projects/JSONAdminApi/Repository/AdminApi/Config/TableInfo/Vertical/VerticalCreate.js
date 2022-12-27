let Dal = require("../../../../../Dal/AdminApi/Config/TableInfo/Vertical/VerticalCreate");

exports.Update = async({ inDataPk, inJsonConfig, inItemConfig, inObjectToUpdate }) => {
  return await  Dal.Update({ inDataPk, inJsonConfig, inItemConfig, inObjectToUpdate })
}