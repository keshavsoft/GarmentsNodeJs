let CommonDashboard = require("../../../../../../../DataSupply/Fs/Dashboard/FromFolders/WithSubTableColumns");

let ForSubTableColumns = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonDashboard.ForSubTableColumns({ inUserPK });
    };
};

module.exports = { ForSubTableColumns };