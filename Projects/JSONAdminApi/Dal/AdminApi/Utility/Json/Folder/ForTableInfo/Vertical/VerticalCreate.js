let CommonFromDataSupply = require("../../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/HigherOrderFuncs/FromTableInfo/Vertical/VerticalCreate");

let VerticalCreate = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonFromDataSupply.StartFunc({
            inUserPK
        });
    };
};

module.exports = {
    VerticalCreate
};