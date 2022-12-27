let dal = require("../../../Dal/AdminApi/Reports/ShowData");

exports.VouchersConsider = ({ inJsonConfig, inReportConfig, inUserName,inQueryObject, callback }) => {
    dal.VouchersConsider({ inJsonConfig, inReportConfig, inUserName,inQueryObject, callback });
};

exports.Columns = ({ inJsonConfig, inItemConfig, inUserName,inQueryObject, callback }) => {
    dal.Columns({ inJsonConfig, inItemConfig, inUserName,inQueryObject, callback });
};

exports.JoinTables = ({ inJsonConfig, inItemConfig, inUserName, callback }) => {
    dal.JoinTables({ inJsonConfig, inItemConfig, inUserName, callback });
};
