
let dal = require("../../../../../../Dal/AdminApi/Config/TableInfo/SearcRowArray/Button/NewWindow");

exports.PullData = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK }) => {
    return await dal.PullData({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK });
};

exports.UpdateData = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK, inDataToUpdate }) => {
    return await dal.UpdateData({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK, inDataToUpdate });
};