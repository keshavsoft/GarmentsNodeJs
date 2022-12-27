let CommonKDataAttributes = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/HigherOrderFuncs/FromSubTableColumns/KDataAttributes");

let KDataAttributes = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonKDataAttributes.StartFunc({ inUserPK });
    };
};

module.exports = {
    KDataAttributes
};
