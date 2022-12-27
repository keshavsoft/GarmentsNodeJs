let CommonFromDataSupply = require("../../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/HigherOrderFuncs/FromTableInfo/TableRowOption/Delete");

let Delete = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonFromDataSupply.StartFunc({
            inUserPK
        });
    };
};

module.exports = {
    Delete
};