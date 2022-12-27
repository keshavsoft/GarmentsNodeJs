let CommonFromTable = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForReturnData/FromTable");
let CommonFromVertical = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForReturnData/FromVertical");

let FromTable = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonFromTable.AsTreeWithColumns({ inUserPK });
    };
};

let FromVertical = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonFromVertical.AsTreeWithColumns({ inUserPK });
    };
};

let FromSubTable = async ({ inUserPK }) => {
    // if (inUserPK > 0) {
    //     return await CommonDashboardForKDataset.AsTreeWithColumns({ inUserPK });
    // };
};

module.exports = {
    FromTable,
    FromVertical,
    FromSubTable
};
