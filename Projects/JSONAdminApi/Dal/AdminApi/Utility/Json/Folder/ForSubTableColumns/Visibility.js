let CommonWithDataAttributeAndDisplayName = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForSubTableColumns/WithDataAttributeAndDisplayName");
let CommonForKDataset = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForSubTableColumns/ForKDataset");
let CommonToggles = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForSubTableColumns/Toggles");
let CommonWidths = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForSubTableColumns/Widths");
let CommonAsTree = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForSubTableColumns/AsTree");
let CommonDisplayType = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForSubTableColumns/DisplayType");
let CommonAllInOneWithValues = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForSubTableColumns/AllInOneWithValues");
let CommonDisplayOrder = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForSubTableColumns/DisplayOrder");

let Toggles = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        let LocalKeysArrayNeeded = ["DataAttribute", "DisplayName", "ShowInTable", "Insert", "CreateNew", "ShowTotal"];
        return await CommonAsTree.AsTreeWithColumns({ inUserPK, inKeysArrayNeeded: LocalKeysArrayNeeded });
    };
};

let Widths = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonWidths.AsTreeWithColumns({ inUserPK });

        // let LocalKeysArrayNeeded = ["DataAttribute", "DisplayName", "Widths"];
        // return await CommonAsTree.AsTreeWithColumns({ inUserPK, inKeysArrayNeeded: LocalKeysArrayNeeded });

    };

};

let DisplayType = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonDisplayType.AsTreeWithColumns({ inUserPK });
    };
};

let KDataset = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonForKDataset.AsTreeWithColumns({ inUserPK });
    };
};

let WithDataAttributeAndDisplayName = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonWithDataAttributeAndDisplayName.AsTreeWithColumns({ inUserPK });
    };
};

let AllInOneWithValues = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonAllInOneWithValues.AsTreeWithColumns({ inUserPK });
    };
};

let DisplayOrder = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonDisplayOrder.AsTreeWithColumns({ inUserPK });
    };
};

module.exports = {
    WithDataAttributeAndDisplayName,
    Toggles,
    KDataset,
    Widths,
    DisplayType,
    AllInOneWithValues,
    DisplayOrder
};
