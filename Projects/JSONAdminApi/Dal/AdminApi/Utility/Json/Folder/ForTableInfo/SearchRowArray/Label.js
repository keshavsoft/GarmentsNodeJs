let CommonFromDataSupply = require("../../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/HigherOrderFuncs/FromTableInfo/SearchRowArray/Label");

let Label = async ({inUserPK}) => {
    if (inUserPK > 0) {
        return await CommonFromDataSupply.StartFunc({
            inUserPK
        });
    };
};

module.exports = {
    Label
};