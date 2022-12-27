let Dal = require("../../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableInfo/SearchRowArray/Search");

exports.Search = async ({ inUserPK }) => {
   return await Dal.Search({ inUserPK });
};
