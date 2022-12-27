let dal = require("../../../../../../../JSONProject/Dal/AdminApi/Config/TableInfo/SearcRowArray/Button/Scrollable");

exports.PullData = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK }) => {
    return await dal.PullData({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK });
};

exports.UpdateData = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK, inDataToUpdate }) => {
    return await dal.UpdateData({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK, inDataToUpdate });

};