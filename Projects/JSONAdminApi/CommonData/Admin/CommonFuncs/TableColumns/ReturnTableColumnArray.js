let debug = require("debug")("KS11");
let CommonColumnKey = "TableColumns";

let ReturnArray = ({ inDisplayJsonData, inItemConfig }) => {
    let LocalItemName = inItemConfig.inItemName;
    let LocalScreenName = inItemConfig.inScreenName;
    
    let LocalTableColumnsArray = inDisplayJsonData[LocalItemName][LocalScreenName][CommonColumnKey];

    return LocalTableColumnsArray;
};

module.exports = { ReturnArray };