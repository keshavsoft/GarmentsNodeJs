let CommonData = require("../../../../CommonData/Reports/Duplicate/Columns");

let Single = ({ inJsonConfig, inItemConfig, inFromName, inToName, inUserName, callback }) => {
    let LocalReturnData = CommonData.Single({ inJsonConfig, inItemConfig, inFromName, inToName, inUserName });

    callback(LocalReturnData, null);
};

let TableColumn = async ({ inJsonConfig, inItemConfig, inFromName, inToName, inUserName }) => {
    return await CommonData.TableColumn({ inJsonConfig, inItemConfig, inFromName, inToName, inUserName });
    //return LocalReturnData;
    //callback(LocalReturnData, null);
};

module.exports = { Single, TableColumn };