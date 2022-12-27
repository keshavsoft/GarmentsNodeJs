//let CommonData = require("../../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/ForSubTableTableInfo/ParentClasses/Table");
//let CommonData = require("../../../../../../../CommonData/Admin/Config/SubTableColumns/ShowData");
let CommonFromDataSupply = require("../../../../../../../../../DataSupply/Fs/Dashboard/FromFolders/FromDisplayJson/HigherOrderFuncs/FromSubcolumnTableInfo/ParentClasses/Table");

let Table =  async ({ LocalUserPK }) => {
    if (LocalUserPK > 0) {
        let LocalReturnObject = await CommonFromDataSupply.StartFunc({ inUserPK: LocalUserPK });
        //callback(LocalReturnObject, null);
        return await LocalReturnObject;
    };
};

module.exports = { Table };


