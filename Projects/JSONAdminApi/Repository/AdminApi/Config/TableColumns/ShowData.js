let dal = require("../../../../Dal/AdminApi/Config/TableColumns/ShowData");

exports.ShowData = ({ inJsonConfig, inItemConfig, inUserName, inQueryObject, callback }) => {
    dal.ShowData({ inJsonConfig, inItemConfig, inUserName, inQueryObject, callback });
};

