let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForSubTableColumns/KDataAttributes");

exports.KDataAttributes = async ({ inUserPK }) => {
    return await Dal.KDataAttributes({ inUserPK });
};
