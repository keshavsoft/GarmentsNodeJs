let CommonFromUserFolder = require("../../UserFolder/getDirectories");
let CommonFromgetDirectories = require("../../getDirectories");
let _ = require("lodash");

let AsObject1 = async ({ inDataPK }) => {
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

        element.Files = _.forOwn(element.Files, (FileKey, FileValue) => {

            FileValue.Items = _.forOwn(FileKey.Items, (ItemKey, ItemValue) => {

                //  console.log("22222222 :", ItemKey.Screens);

                ItemValue.Screens = _.forOwn(ItemKey.Screens, (ScreenKey, ScreenValue) => {
                    //console.log("ColumnKey :", Object.keys(ScreenKey.TableColumnsObject));

                    ScreenValue.TableColumnsObject = _.forOwn(ScreenKey.TableColumnsObject, (ColumnValue, ColumnKey, object) => {
                        //ColumnKey = { ...ColumnKey.ParentClasses };
                        //ScreenValue.TableColumnsObject =
                        object = "----";
                        // ColumnValue = _.forOwn(ColumnValue, (DataAttributeValue, DataAttributeKey) => {
                        //     console.log("ColumnValue :", DataAttributeKey);
                        // });

                    });

                });

            });
        });

        return element;
    });

    console.log("result---------- : ", LocalAltered[0].Files.Accounts.Items.Accounts.Screens.Create.TableColumnsObject.pk);

    result.forEach(element => {
        LocalReturnObject.Folders[element.FolderName] = element;
    });


    // console.log("result : ", result);
    return await LocalReturnObject;
};

let AsObject2 = async ({ inDataPK }) => {
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
            ([key, value]) => {
                LoopInsideFile.Files[key] = {};
            }
        );

        return LoopInsideFile;
    });

    console.log("result---------- : ", LocalAltered[0].Files);

    result.forEach(element => {
        LocalReturnObject.Folders[element.FolderName] = element;
    });


    // console.log("result : ", result);
    return await LocalReturnObject;
};

let AsObject = async ({ inDataPK }) => {
    console.log("inDataPK--",inDataPK);
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

                                Object.entries(ScreenValue.TableColumnsObject).forEach(
                                    ([ColumnKey, ColumnValue]) => {
                                        LoopInsideFile.Files[FileKey].Items[ItemKey].Screens[ScreenKey].TableColumnsObject[ColumnKey] = {
                                            DataAttribute: ColumnValue.DataAttribute,
                                            DisplayName: ColumnValue.DisplayName,
                                            ShowInTable:ColumnValue.ShowInTable,
                                            Insert:ColumnValue.Insert,
                                            CreateNew:ColumnValue.CreateNew,
                                            IsTextArea:ColumnValue.IsTextArea
                                        };
                                    }
                                );
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
    let LocalData = await AsObject({ inDataPK: 1022 });
    //  console.log("LocalData : ", LocalData);
};

// LocalMockFunc().then();

module.exports = { AsObject };
