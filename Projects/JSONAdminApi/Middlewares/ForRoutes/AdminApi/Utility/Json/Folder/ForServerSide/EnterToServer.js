let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForServerSide/EnterToServer");

exports.AsTree = async ({ inUserPK }) => {
    return await Dal.AsTree({ inUserPK });
};
