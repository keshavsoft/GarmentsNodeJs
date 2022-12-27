let debug = require("debug")("KS11");

let ReturnArrayElement = ({ inTableColumnsArray, inItemConfig }) => {
    let LocalReturnArrayElement;
        //let LocalColumnName = inItemConfig.inColumnName;
        let LocalSubTableColumnName = inItemConfig.inSubTableColumnName;

        LocalReturnArrayElement = inTableColumnsArray.find((LoopItem) => {
            return LoopItem.DataAttribute === LocalSubTableColumnName;
        });

        return LocalReturnArrayElement;
        
};

module.exports = { ReturnArrayElement };