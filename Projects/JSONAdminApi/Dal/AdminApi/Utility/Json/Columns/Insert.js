//let CommonData = require("../../../../../CommonData/Utility/Json/Columns/Insert");
let CommonData = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/TableColumns/Insert/Start");


let Insert = ({ inJsonConfig, inItemConfig, inColumnName, inDataPk }) => {
    return new Promise((resolve, reject) => {
        if (inDataPk > 0) {

            CommonData.Insert({ inJsonConfig, inItemConfig, inColumnName, inUserPK: inDataPk }).then(resolve).catch(reject);
        };
    });
};

module.exports = { Insert };
