let CommonFromDataSupply = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForServerSide/AsTree");
let CommonDashboard = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/WithTableColumns");
let CommonDashboardForKDataset = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForTableColumns/ForKDataset");
let CommonWithDataAttributeAndDisplayName = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForTableColumns/WithDataAttributeAndDisplayName");
let CommonWithOutSubTableColumns = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForTableColumns/WithOutSubTableColumns");
let CommonAllInOneWithValues = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForTableColumns/AllInOneWithValues");
let CommonDataAttributes = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForTableColumns/DataAttributes");
let CommonWidths = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForServerSide/Widths");
let CommonDisplayOrder = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForServerSide/DisplayOrder");

let Toggles = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonDashboard.Toggles({ inUserPK });
    };
};

let AllInOneWithValues = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonAllInOneWithValues.AsTreeWithColumns({ inUserPK });
    };
};

let KDataset = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonDashboardForKDataset.AsTreeWithColumns({ inUserPK });
    };
};

let ParentClasses = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonFromDataSupply.AsTreeWithColumns({
            inUserPK,
            inKeyForServerSide: "ParentClasses"
        });
    };
};

let WithDataAttributeAndDisplayName = async ({ inDataPk }) => {
    //console.log("inUserPK -------------- : ", inDataPk);
    if (inDataPk > 0) {
        return await CommonWithDataAttributeAndDisplayName.AsTreeWithColumns({ inDataPk });
    };
};

let WithOutSubTableColumns = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonWithOutSubTableColumns.AsTreeWithColumns({ inUserPK });
    };
};

let DisplayType = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonFromDataSupply.AsTreeWithColumns({
            inUserPK,
            inKeyForServerSide: "DisplayType"
        });
    };
};

let KDatasetStuff = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonFromDataSupply.AsTreeWithColumns({
            inUserPK,
            inKeyForServerSide: "KDatasetStuff"
        });
    };
};

let Dynamic = async ({ inUserPK, inKeyForServerSide }) => {
    if (inUserPK > 0) {
        return await CommonFromDataSupply.AsTreeWithColumns({
            inUserPK,
            inKeyForServerSide
        });
    };
};

let DataAttributes = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonDataAttributes.AsTreeWithColumns({ inUserPK });
    };
};

let Widths = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonWidths.AsTreeWithColumns({
            inUserPK
        });
    };
};

let DisplayOrder = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonDisplayOrder.AsTreeWithColumns({
            inUserPK
        });
    };
};


module.exports = {
    Toggles, KDataset, WithDataAttributeAndDisplayName,
    WithOutSubTableColumns,
    AllInOneWithValues,
    ParentClasses,
    DisplayType,
    KDatasetStuff,
    Dynamic,
    DataAttributes,
    Widths,
    DisplayOrder

};
