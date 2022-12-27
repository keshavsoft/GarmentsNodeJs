//let CommonFromTable = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForServerSide/DefaultValueCreate");
let CommonFromTable = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForServerSide/TransformBeforeSave");

let AsTree = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonFromTable.AsTreeWithColumns({
            inUserPK,
            inKeyForServerSide: "DefaultShowData"
        });
    };
};

module.exports = {
    AsTree
};
