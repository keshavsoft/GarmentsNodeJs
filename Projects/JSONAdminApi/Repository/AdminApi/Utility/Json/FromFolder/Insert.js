let Dal = require("../../../../../Dal/AdminApi/Utility/Json/FromFolder/Insert");

exports.OnlyFolder = async ({ inFolderName, inDataPK }) => {
    return await Dal.OnlyFolder({ inFolderName, inDataPK });

};
