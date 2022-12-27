let Dal = require("../../../../../Dal/AdminApi/Utility/Json/Screens/Insert");

exports.Insert = ({ inJsonConfig, inItemName, inToName, inDataPK }) => {
    return new Promise((resolve, reject) => {
        Dal.Insert({ inJsonConfig, inItemName, inToName, inDataPK }).then(resolve).catch(reject);
    });
};
