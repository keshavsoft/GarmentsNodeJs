let CommonDashboard = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/AsTree");

let TableRowOptions = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        console.log("hai....");
        return await CommonDashboard.AsTreeWithColumns({
            inUserPK,
            inFromKey: "TableInfo",
            inKeyToPull: "TableRowOptions"
        });
    };
};

module.exports = {
    TableRowOptions
};