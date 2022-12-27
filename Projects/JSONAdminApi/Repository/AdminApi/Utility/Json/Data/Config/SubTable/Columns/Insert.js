let Dal = require("../../../../../../../../Dal/AdminApi/Utility/Json/Data/Config/SubTable/Columns/Insert");

exports.Insert = ({ inJsonConfig, inItemConfig, inSubTableColumnName, inDataPk }) => {
    return new Promise((resolve, reject) => {
        Dal.Insert({ inJsonConfig, inItemConfig, inSubTableColumnName, inDataPk }).then(resolve).catch(reject);
    });
};
