let FromJsonConfigData = require("../../../../../../../DataSupply/Fs/PreLoad/Tabular/JsonConfig")

let ShowData = ({ inUserPK, callback }) => {
    if (inUserPK > 0) {
        let LocalReturnObject = FromJsonConfigData.JsonConfig({ inUserPK });
        callback(LocalReturnObject, null);
    };
};

module.exports = { ShowData };