let dal = require("../../../../Dal/AdminApi/Reports/TableInfo/ShowData");

exports.ShowData = ({ inReportConfig, inUserName, inQueryObject, callback }) => {
    dal.ShowData({ inReportConfig, inUserName, inQueryObject, callback });
};

