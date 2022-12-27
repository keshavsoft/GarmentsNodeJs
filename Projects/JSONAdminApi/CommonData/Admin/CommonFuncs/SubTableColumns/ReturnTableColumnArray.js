let debug = require("debug")("KS11");
let CommonColumnKey = "TableColumns";
let CommonSubColumnKey = "SubTableColumns";

let ReturnArray = ({ inDisplayJsonData, inItemConfig }) => {
    let LocalItemName = inItemConfig.inItemName;
    let LocalScreenName = inItemConfig.inScreenName;
    let LocalColumnName = inItemConfig.inColumnName;

    let LocalTableColumnsArray = inDisplayJsonData[LocalItemName][LocalScreenName][CommonSubColumnKey][LocalColumnName][CommonColumnKey];
   // LocalTableColumnData = _.get(LocalDataFromJSON, `${LocalItemName}.${LocalScreenName}.${CommonSubColumnKey}.${LocalColumnName}.${CommonColumnKey}`);


    return LocalTableColumnsArray;
};

module.exports = { ReturnArray };