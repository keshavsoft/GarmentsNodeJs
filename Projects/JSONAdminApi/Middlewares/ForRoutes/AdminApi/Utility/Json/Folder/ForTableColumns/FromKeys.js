let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableColumns/Toggles");

exports.Toggles = async ({ inDataPk }) => {
    return await Dal.Toggles({ inDataPk });
};
