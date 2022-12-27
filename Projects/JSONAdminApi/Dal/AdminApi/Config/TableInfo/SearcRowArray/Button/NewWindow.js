let CommonDataSupply = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Items/Screens/PullData/FromDisplayJson/TableInfo/SearchRowArray/Button/NewWindow/PullData");
let CommonDataSupplyUpdateData = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Items/Screens/PullData/FromDisplayJson/TableInfo/SearchRowArray/Button/NewWindow/UpdateData");

exports.PullData = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK }) => {
    // console.log("Dal............", inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK);
    let LocalDataToReturn = await CommonDataSupply.FromFoldFileItemScreen({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK });

    return await LocalDataToReturn;
};

exports.UpdateData = async ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK, inDataToUpdate }) => {
    let LocalDataToReturn = await CommonDataSupplyUpdateData.FromFoldFileItemScreen({
        inFolderName, inFileNameWithExtension, inItemName, inScreenName, inDataPK,
        inDataToUpdate
    });

    return await LocalDataToReturn;
};
