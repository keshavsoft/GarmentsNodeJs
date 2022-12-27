let Dal = require("../../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableInfo/SearchRowArray/Label");

exports.Label = async ({ inUserPK }) => {
   return await Dal.Label({ inUserPK });
};
