let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/ConfigFromDisplayJson/Items/Screens/PullData/ForTable/Row/Show");

exports.FromParams = async ({ inDataPK, inJsonConfig, inItemConfig, inJsonPk }) => {
    let LocalDataToReturn = await CommonDataSupply.StartFunc({
        inDataPK,
        inJsonConfig, inItemConfig, inPK: inJsonPk
    });

    return await LocalDataToReturn;
};
