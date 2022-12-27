let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableColumns/AllInOneWithValues");

exports.AllInOneWithValues = async ({ inUserPK }) => {
    return await Dal.AllInOneWithValues({ inUserPK });
};
