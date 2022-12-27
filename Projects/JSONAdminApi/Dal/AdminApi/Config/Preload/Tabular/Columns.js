let FromJsonConfigData = require("../../../../../../../DataSupply/Fs/PreLoad/Tabular/Columns")

let ShowData = ({ inUserPK, callback }) => {
    if (inUserPK > 0) {
        let LocalReturnObject = FromJsonConfigData.Columns({ inUserPK });
        callback(LocalReturnObject, null);
    };
};

module.exports = { ShowData };