let Dal = require("../../../../../Dal/AdminApi/Utility/Json/Columns/Insert");

exports.Insert = ({ inJsonConfig, inItemConfig, inColumnName, inDataPk }) => {
    return new Promise((resolve, reject) => {
        Dal.Insert({ inJsonConfig, inItemConfig, inColumnName, inDataPk }).then(resolve).catch(reject);
    });
};
