let Dal = require("../../../../Dal/AdminApi/Reports/Duplicate/Columns");

exports.Single = ({ inJsonConfig, inItemConfig, inFromName, inToName, inUserName, callback }) => {
    Dal.Single({
        inJsonConfig, inItemConfig, inFromName, inToName, inUserName, callback: (data, error) => {
            callback(data, error);
        }
    });
};

exports.TableColumn = async ({ inJsonConfig, inItemConfig, inFromName, inToName, inUserName }) => {
    return await Dal.TableColumn({
        inJsonConfig, inItemConfig, inFromName, inToName, inUserName
    });
};

