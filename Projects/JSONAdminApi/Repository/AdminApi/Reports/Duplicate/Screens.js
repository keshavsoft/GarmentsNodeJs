let Dal = require("../../../../Dal/AdminApi/Reports/Duplicate/Screens");

exports.Single = ({inJsonConfig, inItemName, inFromName, inToName, inUserName, callback }) => {
    Dal.Single({
        inJsonConfig, inItemName, inFromName, inToName, inUserName, callback: (data, error) => {
          console.log("data-----33",data);
            callback(data, error);
        }
    });
};
