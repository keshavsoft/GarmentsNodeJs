let dal = require("../../../../../Dal/AdminApi/Config/Preload/Tabular/Columns");

exports.ShowData = ({ inUserPK, callback }) => {
    dal.ShowData({ inUserPK, callback });
};