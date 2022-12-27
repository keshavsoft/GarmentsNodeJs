let dal = require("../../../../Dal/AdminApi/Config/TableInfo/Update");

exports.Update = ({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inUserName, callback }) => {
    dal.Update({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inUserName, callback });
};
