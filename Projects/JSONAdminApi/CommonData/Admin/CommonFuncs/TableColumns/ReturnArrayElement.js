let debug = require("debug")("KS11");

let ReturnArrayElement = ({ inTableColumnsArray, inItemConfig }) => {
    let LocalReturnArrayElement;
        let LocalColumnName = inItemConfig.inColumnName;

        LocalReturnArrayElement = inTableColumnsArray.find((LoopItem) => {
            return LoopItem.DataAttribute === LocalColumnName;
        });

        return LocalReturnArrayElement;
        
};

module.exports = { ReturnArrayElement };