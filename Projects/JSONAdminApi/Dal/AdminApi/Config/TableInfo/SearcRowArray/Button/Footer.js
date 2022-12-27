let CommonDataSupply = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Items/Screens/PullData/FromDisplayJson/TableInfo/SearchRowArray/Button/Footer/PullData");
let CommonDataSupplyUpdateData = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Items/Screens/PullData/FromDisplayJson/TableInfo/SearchRowArray/Button/Footer/UpdateData");

exports.PullData = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK }) => {
    let LocalDataToReturn = await CommonDataSupply.FromFoldFileItemScreen({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK });

    return await LocalDataToReturn;
};

exports.WithApi = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK }) => {
    let LocalDataToReturn = await CommonDataSupply.FromWithApi({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK });

    return await LocalDataToReturn;
};

exports.UpdateData = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK, inDataToUpdate }) => {

    let LocalDataToReturn = await CommonDataSupplyUpdateData.FromFoldFileItemScreen({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK, inDataToUpdate });

    return await LocalDataToReturn;
};
