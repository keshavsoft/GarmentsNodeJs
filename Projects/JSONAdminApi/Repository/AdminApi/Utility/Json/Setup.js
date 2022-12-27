let Dal = require("../../../../Dal/AdminApi/Utility/Json/Setup");

exports.FromDataPk = async ({ inDataPk }) => {
    return await Dal.FromDataPk({ inDataPk });
};