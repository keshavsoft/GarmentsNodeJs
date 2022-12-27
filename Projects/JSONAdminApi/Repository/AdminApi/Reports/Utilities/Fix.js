let dal = require("../../../../Dal/AdminApi/Reports/Utilities/Fix");

exports.JSONParams = async ({ inReportName, inUserName }) => {
    return await dal.JSONParams({ inReportName, inUserName });
};
