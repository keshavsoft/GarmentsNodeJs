let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForServerSide/DefaultValueCreate");

exports.AsTree = async ({ inUserPK }) => {
    return await Dal.AsTree({ inUserPK });
};
