let CommonFromUserFolder = require("../../UserFolder/getDirectories");
let CommonFromgetDirectories = require("../../getDirectories");
let _ = require("lodash");

let AsObject = async ({ inDataPK }) => {
    let LocalDataPK = inDataPK;
    let LocalReturnObject = {};
    LocalReturnObject.Folders = {};

    let LocalArray = CommonFromgetDirectories.StartFunc({ inDataPK: LocalDataPK });

    const result = await Promise.all(LocalArray.map(async (file) => {
        let LoopInsideFile = await CommonFromUserFolder.AsObjects({
            inFolderName: file,
            inDataPK: LocalDataPK
        });

        return await {
            FolderName: file,
            Files: LoopInsideFile
        };
    }));

    let LocalAltered = result.map(element => {
        let LoopInsideFile = JSON.parse(JSON.stringify(element));
        LoopInsideFile.Files = {};

        Object.entries(element.Files).forEach(
            ([FileKey, FileValue]) => {
                LoopInsideFile.Files[FileKey] = JSON.parse(JSON.stringify(FileValue));

                Object.entries(FileValue.Items).forEach(
                    ([ItemKey, ItemValue]) => {
                        LoopInsideFile.Files[FileKey].Items[ItemKey] = JSON.parse(JSON.stringify(ItemValue));

                        Object.entries(ItemValue.Screens).forEach(
                            ([ScreenKey, ScreenValue]) => {
                                LoopInsideFile.Files[FileKey].Items[ItemKey].Screens[ScreenKey] = JSON.parse(JSON.stringify(ScreenValue));
                                LoopInsideFile.Files[FileKey].Items[ItemKey].Screens[ScreenKey].TableInfoObject = {
                                    ColumnReOrder: ScreenValue.TableInfo.ColumnReOrder,
                                    ShowFooter: ScreenValue.TableInfo.ShowFooter,
                                    DataAttributesFromTableInfo: ScreenValue.TableInfo.DataAttributesFromTableInfo,
                                    DataAttributesFromTableDataRow: ScreenValue.TableInfo.DataAttributesFromTableDataRow
                                };

                                delete LoopInsideFile.Files[FileKey].Items[ItemKey].Screens[ScreenKey].SubTableColumns;
                                delete LoopInsideFile.Files[FileKey].Items[ItemKey].Screens[ScreenKey].TableColumnsObject;
                                delete LoopInsideFile.Files[FileKey].Items[ItemKey].Screens[ScreenKey].TableInfo;

                                // Object.entries(ScreenValue.TableColumnsObject).forEach(
                                //     ([ColumnKey, ColumnValue]) => {
                                //         LoopInsideFile.Files[FileKey].Items[ItemKey].Screens[ScreenKey].TableColumnsObject[ColumnKey] = {
                                //             ColumnReOrder: ColumnValue.ColumnReOrder,
                                //             DataAttributesFromTableInfo:ColumnValue.DataAttributesFromTableInfo,
                                //             DataAttributesFromTableDataRow:ColumnValue.FilesDataAttributesFromTableDataRow
                                //         };
                                //     }
                                // );
                            }
                        );
                    }
                );
            }
        );

        return LoopInsideFile;
    });

    //  console.log("result---------- : ", LocalAltered[0].Files.Accounts.Items.Accounts.Screens.Create.TableColumnsObject.pk);

    LocalAltered.forEach(element => {
        LocalReturnObject.Folders[element.FolderName] = element;
    });

    return await LocalReturnObject;
};

let LocalMockFunc = async () => {
    let LocalData = await AsObject({ inDataPK: 901 });
    console.log("LocalData : ", LocalData);
};

//LocalMockFunc().then();

module.exports = { AsObject };
