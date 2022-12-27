let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/ForTableInfo/Visibility");

exports.TableRowOptions = async ({ inUserPK }) => {
    
    return await Dal.TableRowOptions({ inUserPK });

};


