let CommonDashboard = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/HigherOrderFuncs/FromTableColumns/AllInOneWithValues");

let AllInOneWithValues = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonDashboard.AsTreeWithColumns({ inDataPk:inUserPK });
    };
};

module.exports = {
    AllInOneWithValues   
};
