let CommonDashboard = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/HigherOrderFuncs/FromTableColumns/DataAttributes");

let DataAttributes = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        console.log("inUserPK-------------- : ", inUserPK);
        return await CommonDashboard.AsTreeWithColumns({ inUserPK });
    };
};

module.exports = {
    DataAttributes
};
