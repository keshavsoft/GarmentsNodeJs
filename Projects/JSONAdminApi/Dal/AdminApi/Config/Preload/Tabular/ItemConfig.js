let FromJsonConfigData = require("../../../../../../../DataSupply/Fs/PreLoad/Tabular/ItemConfig")

let ShowData = ({ inUserPK, callback }) => {
    if (inUserPK > 0) {
        let LocalReturnObject = FromJsonConfigData.ItemConfig({ inUserPK });
        callback(LocalReturnObject, null);
    };
};

module.exports = { ShowData };