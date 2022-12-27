let dal = require("../../../../../Dal/AdminApi/Config/Preload/Tabular/DataListInfo");

exports.ShowData = ({ inUserPK, callback }) => {
    dal.ShowData({ inUserPK, callback });
};