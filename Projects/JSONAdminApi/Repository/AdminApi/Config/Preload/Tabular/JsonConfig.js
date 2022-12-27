let dal = require("../../../../../Dal/AdminApi/Config/Preload/Tabular/JsonConfig");

exports.ShowData = ({ inUserPK, callback }) => {
    dal.ShowData({ inUserPK, callback });
};