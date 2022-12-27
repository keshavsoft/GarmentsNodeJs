//let CommonDashboard = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/WithTableColumns");
// let CommonDashboard = require("../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/HigherOrderFuncs/FromTableColumns/FromKeys");
// let CommonDashboard = require("../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/AsTree/ForTableColumns/Toggles");

let Toggles = async ({ inDataPk }) => {
    if (inDataPk > 0) {
        return await CommonDashboard.AsObject({ inDataPK:inDataPk });
    };
};

module.exports = {
    Toggles   
};
