let Dal = require("../../../../../Dal/AdminApi/Utility/Json/Items/Insert");
let debug = require("debug")("KS27");

exports.Insert = ({ inJsonConfig, inToName, inUserName }) => {
    return new Promise((resolve, reject) => {
        Dal.Insert({ inJsonConfig, inToName, inUserName }).then(resolve).catch(reject);
    });
};
