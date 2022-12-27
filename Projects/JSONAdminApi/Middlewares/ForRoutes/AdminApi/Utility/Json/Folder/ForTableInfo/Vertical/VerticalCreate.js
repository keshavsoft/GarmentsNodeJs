let Dal = require("../../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableInfo/Vertical/VerticalCreate");

exports.VerticalCreate = async ({ inUserPK }) => {
    return await Dal.VerticalCreate({ inUserPK });
};