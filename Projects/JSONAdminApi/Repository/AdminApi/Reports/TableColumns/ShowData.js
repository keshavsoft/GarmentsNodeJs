let dal = require("../../../../Dal/AdminApi/Reports/TableColumns/ShowData");


exports.ShowNames = ({ inReportConfig, inColumnPk, inUserName, inQueryObject, callback }) => {
    dal.ColumnData({ inReportConfig, inColumnPk, inUserName, inQueryObject, callback });
};

exports.KDataset = ({ inItemConfig, inColumnPk, inUserName, callback }) => {
    dal.KDataset({ inItemConfig, inColumnPk, inUserName, callback });
};

exports.KDatasetSavecheck = ({ inItemConfig, inColumnPk, inUserName, callback }) => {
    dal.KDatasetSavecheck({ inItemConfig, inColumnPk, inUserName, callback });
};

exports.DisplayType = ({ inItemConfig, inColumnPk, inUserName, callback }) => {
    dal.DisplayType({ inItemConfig, inColumnPk, inUserName, callback });
};