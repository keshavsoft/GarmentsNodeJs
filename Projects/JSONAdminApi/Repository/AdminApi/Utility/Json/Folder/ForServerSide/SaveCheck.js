let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForServerSide/SaveCheck");

exports.AsTree = async ({ inUserPK }) => {
    return await Dal.AsTree({ inUserPK });
};

