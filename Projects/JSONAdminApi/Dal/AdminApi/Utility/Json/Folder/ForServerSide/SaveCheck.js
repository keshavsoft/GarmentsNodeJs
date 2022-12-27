//let CommonFromTable = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForServerSide/SaveCheck");
let CommonFromTable = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForServerSide/TransformBeforeSave");

let AsTree = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonFromTable.AsTreeWithColumns({
            inUserPK,
            inKeyForServerSide: "SaveCheck"
        });
    };
};

module.exports = {
    AsTree
};

