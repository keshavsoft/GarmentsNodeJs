let CommonUpdatekeys = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Screens/ForTableInfo/Vertical/VerticalCreate");

let Update = async ({ inDataPk, inJsonConfig, inItemConfig, inObjectToUpdate }) => {
        if(inDataPk > 0){
           return await CommonUpdatekeys.FuncStart({inDataPk,inJsonConfig, inItemConfig, inObjectToUpdate})
        };
};

module.exports = {
    Update
};