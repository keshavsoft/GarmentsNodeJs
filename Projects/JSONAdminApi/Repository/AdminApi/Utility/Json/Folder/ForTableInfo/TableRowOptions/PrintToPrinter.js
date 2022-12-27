let Dal = require("../../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableInfo/TableRowOptions/PrintToPrinter");

exports.PrintToPrinter = async ({ inUserPK }) => {
    return await Dal.PrintToPrinter({ inUserPK });
};