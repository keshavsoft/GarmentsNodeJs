let dal = require("../../../../Dal/AdminApi/Reports/Delete/Columns");

exports.Columns = ({ inJsonConfig, inItemConfig, inUserName, callback }) => {
    dal.Columns({ inJsonConfig, inItemConfig, inUserName, callback });
};



