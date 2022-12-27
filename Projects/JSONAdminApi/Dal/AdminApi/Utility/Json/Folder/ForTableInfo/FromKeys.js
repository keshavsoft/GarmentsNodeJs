let CommonDashboard = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/TableInfo/FromKeys");

let ColumnReOrder = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        //console.log("hai....");
        return await CommonDashboard.ColumnReOrder({
            inUserPK
        });
    };
};

let MainKeys = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        //console.log("hai....");
        return await CommonDashboard.MainKeys({
            inUserPK
        });
    };
};

let Delete = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        //console.log("hai....");
        return await CommonDashboard.Delete({
            inUserPK
        });
    };
};

module.exports = {
    ColumnReOrder,
    MainKeys,
    Delete
};