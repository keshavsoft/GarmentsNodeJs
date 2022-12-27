let Dal = require("../../../../../../../../../../Dal/AdminApi/Utility/Json/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/Columns/Insert");

exports.Insert = async ({ inJsonConfig, inItemConfig, inColumnName, inDataPK }) => {
    return await Dal.Insert({ inJsonConfig, inItemConfig, inColumnName, inDataPK });
};
