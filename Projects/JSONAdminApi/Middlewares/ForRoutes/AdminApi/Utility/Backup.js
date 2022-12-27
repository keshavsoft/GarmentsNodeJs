let dal = require("../../../Dal/AdminApi/Utility/Backup");

exports.Backup = ({ inResponse, inDataPk, callback }) => {
    dal.Backup({ inResponse, inDataPk, callback });
};

exports.BackupToMail = async ({ inDataPk }) => {
    return await dal.BackupToMail({ inDataPk });
};