let dal = require("../../../../Dal/AdminApi/Reports/Tabular/VouchersConsider");

exports.AsTree = async ({ inReportName, inUserName }) => {
    return await dal.AsTree({ inReportName, inUserName });
};
exports.Toggles = async ({ inUserPK }) => {
    return await dal.Toggles({ inUserPK });
};
