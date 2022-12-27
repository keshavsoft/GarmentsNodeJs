let dal = require("../../../../Dal/AdminApi/Config/Preload/ShowData");

exports.ShowData = ({ inJsonConfig, inItemConfig, inUserName, inQueryObject, callback }) => {
    dal.ShowData({ inJsonConfig, inItemConfig, inUserName, inQueryObject, callback });
};