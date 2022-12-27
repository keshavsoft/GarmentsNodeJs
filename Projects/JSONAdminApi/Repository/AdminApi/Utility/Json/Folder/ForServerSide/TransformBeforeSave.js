let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForServerSide/TransformBeforeSave");

exports.AsTree = async ({ inUserPK }) => {
    return await Dal.AsTree({ inUserPK });
};