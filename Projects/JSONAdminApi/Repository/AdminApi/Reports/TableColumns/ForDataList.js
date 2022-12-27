let dal = require("../../../../Dal/AdminApi/Reports/TableColumns/ForDataList");

exports.ShowItemNames = ({ inReportName, inUserName, callback }) => {
    dal.ShowItemNames({ inReportName, inUserName, callback });
};
