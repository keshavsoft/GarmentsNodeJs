let dal = require("../../../../Dal/AdminApi/Reports/TableColumns/Update");

exports.DisplayType = ({ inReportConfig, inObjectToUpdate, inDataPk, inColumnsPk, callback }) => {
    dal.DisplayType({ inReportConfig, inObjectToUpdate, inDataPk, inColumnsPk, callback });
};