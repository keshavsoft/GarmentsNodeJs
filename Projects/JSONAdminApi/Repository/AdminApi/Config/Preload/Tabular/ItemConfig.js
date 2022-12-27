let dal = require("../../../../../Dal/AdminApi/Config/Preload/Tabular/ItemConfig");

exports.ShowData = ({ inUserPK, callback }) => {
    dal.ShowData({ inUserPK, callback });
};