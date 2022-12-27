let FromJsonConfigData = require("../../../../../../../DataSupply/Fs/PreLoad/Tabular/ItemConfig")

let PullData = ({ inUserPK }) => {
    let LocalConfigData = FromJsonConfigData.ItemConfig({ inUserPK });

    return LocalConfigData;
};

module.exports = { PullData };