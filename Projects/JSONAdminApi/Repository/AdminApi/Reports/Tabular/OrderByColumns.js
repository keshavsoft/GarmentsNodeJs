let dal = require("../../../../Dal/AdminApi/Reports/Tabular/OrderByColumns");

exports.AsTree = async ({ inReportName, inUserName }) => {
    return await dal.AsTree({ inReportName, inUserName });
};
exports.Toggles = async ({ inReportName, inUserName }) => {
    return await dal.Toggles({ inReportName, inUserName });
};
