let Dal = require("../../../../../Dal/AdminApi/Utility/Json/PreLoad/Duplicate");

exports.Single = ({ inFromName, inToName, inUserName }) => {
    return new Promise((resolve, reject) => {
        Dal.Single({ inFromName, inToName, inUserName }).then(resolve).catch(reject);
    });
};
