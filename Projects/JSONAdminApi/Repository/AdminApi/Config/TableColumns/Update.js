let dal = require("../../../../Dal/AdminApi/Config/TableColumns/Update");

exports.Update = ({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inUserName, callback }) => {
    dal.Update({ inJsonConfig, inItemConfig, inObjectToUpdate, inQueryObject, inUserName, callback });
};
