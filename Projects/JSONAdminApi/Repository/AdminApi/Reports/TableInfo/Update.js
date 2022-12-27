let dal = require("../../../../Dal/AdminApi/Reports/TableInfo/Update");

exports.Update = ({ inReportConfig, inObjectToUpdate, inQueryObject, inUserName, callback }) => {
    dal.Update({ inReportConfig, inObjectToUpdate, inQueryObject, inUserName, callback });
};
