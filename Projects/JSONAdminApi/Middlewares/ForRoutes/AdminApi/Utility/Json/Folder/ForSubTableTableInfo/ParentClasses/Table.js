let dal = require("../../../../../../../Dal/AdminApi/Utility/Json/Folder/ForSubTableTableInfo/ParentClasses/Table");

exports.Table = async ({ LocalUserPK }) => {
   return await dal.Table({ LocalUserPK});
};