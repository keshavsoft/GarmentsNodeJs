let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Screens/Items/PullData/ForTable/PullFuncs");

exports.Original = async ({ inDataPk, inJsonConfig, inItemConfig }) => {
    let LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPk, inJsonConfig, inItemConfig });
    return await LocalDataToReturn;
};
