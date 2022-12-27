// let CommonDashboard = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/AsTree");

let CommonFromDataSupply = require("../../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/HigherOrderFuncs/FromTableInfo/TableRowOption/PrintToPrinter");

let PrintToPrinter = async ({ inUserPK }) => {
    // console.log("inUserPK:", inUserPK);

    if (inUserPK > 0) {
        console.log("hai....");
        return await CommonFromDataSupply.StartFunc({
            inUserPK
        });
    };
};

module.exports = {
    PrintToPrinter
};