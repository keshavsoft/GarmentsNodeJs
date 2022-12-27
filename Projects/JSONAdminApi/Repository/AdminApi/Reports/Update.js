let dal = require("../../../Dal/AdminApi/Reports/Update");

exports.VouchersConsider = ({ inJsonConfig, inReportConfig, inObjectToUpdate, inUserName,inQueryObject, callback }) => {
    dal.VouchersConsider({ inJsonConfig, inReportConfig, inObjectToUpdate, inUserName,inQueryObject, callback });
};

exports.Columns = ({ inJsonConfig, inItemConfig, inObjectToUpdate, inUserName, callback }) => {
    dal.Columns({ inJsonConfig, inItemConfig, inObjectToUpdate, inUserName, callback });
};

exports.JoinTables = ({ inJsonConfig, inItemConfig, inObjectToUpdate, inUserName, callback }) => {
    dal.JoinTables({ inJsonConfig, inItemConfig, inObjectToUpdate, inUserName, callback });
};

