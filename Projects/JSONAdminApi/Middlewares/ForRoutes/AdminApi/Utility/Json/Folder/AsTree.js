let Dal = require("../../../../../Dal/AdminApi/Utility/Json/Folder/AsTree");

exports.ForSubTableColumns = async ({ inUserPK }) => {
    return await Dal.ForSubTableColumns({ inUserPK });
};
