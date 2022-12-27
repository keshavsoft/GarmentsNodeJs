let DataSupply = require("../../../../../../DataSupply/Fs/LoginFolder/UserDataJson/Find/UserNameAndPassword");


let ForUserAndPasswordReturnFirmDetails = async ({ inUserName, inPassWord }) => {
    console.log("dal:--",inUserName, inPassWord);
    return await DataSupply.ForUserAndPasswordReturnFirmDetails({ inUserName, inPassWord });
};

module.exports = { ForUserAndPasswordReturnFirmDetails };