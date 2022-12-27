let CommonSetup = require("../../../../../../DataSupply/Fs/Users/Setup");

let FromDataPk = async ({ inDataPk }) => {
    let LocalReturnData = { KTF: false, KResult: [] };
    let LocalFromDataSupply = await CommonSetup.KDataFolder({ inDataPk });
    
    return LocalReturnData;
};

module.exports = { FromDataPk };
