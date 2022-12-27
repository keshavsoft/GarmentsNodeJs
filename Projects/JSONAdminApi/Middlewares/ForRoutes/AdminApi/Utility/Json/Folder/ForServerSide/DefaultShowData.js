let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForServerSide/DefaultShowData");

exports.AsTree = async ({ inUserPK }) => {
    return await Dal.AsTree({ inUserPK });
};
