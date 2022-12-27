let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableColumns/DataAttributes");

exports.DataAttributes = async ({ inUserPK }) => {
    return await Dal.DataAttributes({ inUserPK });
};
