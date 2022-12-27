let dal = require("../../../Dal/AdminApi/Reports/ForDataList");

exports.ShowNames = ({  inJsonConfig, inItemConfig, inUserName, callback }) => {
    dal.ShowNames({  inJsonConfig, inItemConfig, inUserName, callback });
};

exports.ShowItemNames = ({  inJsonConfig, inUserName, callback }) => {
    dal.ShowItemNames({  inJsonConfig, inUserName, callback });
};

exports.VouchersConsider = ({   inReportName, inUserName, callback }) => {
    dal.VouchersConsider({   inReportName, inUserName, callback });
};

exports.Columns = ({  inJsonConfig, inReportConfig, inUserName, callback }) => {
    dal.Columns({  inJsonConfig, inReportConfig, inUserName, callback });
};

exports.JoinTables = ({  inJsonConfig, inReportConfig, inUserName, callback }) => {
    dal.JoinTables({  inJsonConfig, inReportConfig, inUserName, callback });
};
exports.JoinTablesColumns = ({  inJsonConfig, inReportConfig, inUserName, callback }) => {
    dal.JoinTablesColumns({  inJsonConfig, inReportConfig, inUserName, callback });
};

