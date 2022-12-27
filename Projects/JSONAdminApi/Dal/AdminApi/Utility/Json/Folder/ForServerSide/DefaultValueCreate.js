let CommonFromDataSupply = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForServerSide/AsTree");

let AsTree = async ({ inUserPK }) => {
    if (inUserPK > 0) {
        return await CommonFromDataSupply.AsTreeWithColumns({
            inUserPK,
            inKeyForServerSide: "ServerSide.DefaultValueCreate"
        });
    };
};

module.exports = {
    AsTree
};
