let CommonFileInsertBulk = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/Insert/Bulk");

let BulkWithFileNameToDataOnly = async ({ inFolderName, inFileNameWithExtension, inBody, inUserPK }) => {
    let LocalReturnData = { KTF: false, KResult: [] };

    try {
        let LocalFromInsert = await CommonFileInsertBulk.InsertToDataOnly({
            inFolderName, inFileNameWithExtension,
            inData: inBody,
            inUserPK
        });
        LocalReturnData.KReason = LocalFromInsert.KReason;
    } catch (error) {
        LocalReturnData.KError = error;
    };

    return LocalReturnData;
};

let LocalTallyFuncs = {
    PrepareFileName: ({ inBody }) => {
        let LocalFileNameWithExtension;
        let LocalDatesArray = [];
        let LocalMaxDate, LocalMinDate;

        LocalDatesArray = inBody.map(element => {
            return element.DATE
        }).filter(element => {
            if (element !== null) {
                return true;
            };
        });

        LocalMaxDate = Math.max(...LocalDatesArray);
        LocalMinDate = Math.min(...LocalDatesArray);

        LocalFileNameWithExtension = `${LocalMinDate}-${LocalMaxDate}.json`;
        console.log("LocalFileNameWithExtension : ", LocalFileNameWithExtension);
        return LocalFileNameWithExtension;
    },
    PrepareBodyData: {
        GroupByVoucherName: ({ inBody }) => {
            let LocalReturnObject = {};

            inBody.forEach(element => {
                LocalReturnObject[element.GUID] = element;
            });

            return LocalReturnObject;
        },
        ArrayToObject: ({ inBody }) => {
            let LocalReturnObject = {};

            inBody.forEach(element => {
                LocalReturnObject[element.GUID] = element;
            });

            return LocalReturnObject;
        }
    }
};

let FromJsonFuncs = {
    FuncClubJsons: () => {
        let LocalMainObject = FuncArrayToObject({ inData: mainData });
        let LocalObjectWithInv = FromJsonFuncs.CommonFuncs.FuncPushInv({ inData: LocalMainObject, inInvData: invData });
        let LocalObjectWithFin = FromJsonFuncs.CommonFuncs.FuncPushFin({ inData: LocalObjectWithInv, inFinData: finData });

        let LocalChangedSignsObject = FromJsonFuncs.CommonFuncs.FuncChangeSigns({ inData: LocalObjectWithFin });
        let LocalCategroisedObject = FromJsonFuncs.CommonFuncs.FuncCategoriseData({ inData: LocalChangedSignsObject });

        return LocalCategroisedObject;
    },
    FuncGroupByVoucherName: ({ inData }) => {
        let LocalReturnObject = {};
        let LocalGroupByName = "VOUCHERTYPENAME";
        let LocalPkName = "GUID";

        for (var i in inData) {
            if (inData[i][LocalGroupByName] in LocalReturnObject) {
                var key = inData[i][LocalPkName];
                LocalReturnObject[inData[i][LocalGroupByName]][key] = inData[i];
            }
            else {
                LocalReturnObject[inData[i][LocalGroupByName]] = {};
                var key = inData[i][LocalPkName];
                LocalReturnObject[inData[i][LocalGroupByName]][key] = inData[i];
            };
        };
        return LocalReturnObject;
    },
    CommonFuncs: {
        FuncCategoriseData: ({ inData }) => {
            let LocalReturnObject = {};
            for (var i in inData) {
                if (inData[i].ParentVoucherName in LocalReturnObject) {
                    var key = inData[i]["pk"];
                    LocalReturnObject[inData[i].ParentVoucherName][key] = inData[i];
                }
                else {
                    LocalReturnObject[inData[i].ParentVoucherName] = {};
                    var key = inData[i]["pk"];
                    LocalReturnObject[inData[i].ParentVoucherName][key] = inData[i];
                };

            };
            return LocalReturnObject;
        },
        FuncChangeSigns: ({ inData }) => {
            let LocalReturnObject = JSON.parse(JSON.stringify(inData));
            for (var i in LocalReturnObject) {
                for (var j in LocalReturnObject[i].InvGrid) {
                    if (LocalReturnObject[i].VoucherSign == "-") {
                        LocalReturnObject[i].InvGrid[j].noof = -LocalReturnObject[i].InvGrid[j].noof;
                    }
                    else if (LocalReturnObject[i].VoucherSign == "+") {
                        LocalReturnObject[i].InvGrid[j].noof = +LocalReturnObject[i].InvGrid[j].noof;

                    };
                };
            };
            return LocalReturnObject;
        },
        FuncPushFin: ({ inData, inFinData }) => {
            let LocalReturnObject = JSON.parse(JSON.stringify(inData));

            for (var i in LocalReturnObject) {
                for (var j in inFinData) {
                    if (LocalReturnObject[i]["pk"] == inFinData[j]["FK"]) {
                        LocalReturnObject[i].FinGrid[inFinData[j]["pk"]] = inFinData[j];
                    };
                };
            };
            return LocalReturnObject;
        },
        FuncPushInv: ({ inData, inInvData }) => {
            let LocalReturnObject = JSON.parse(JSON.stringify(inData));

            for (var i in LocalReturnObject) {
                for (var j in inInvData) {
                    if (LocalReturnObject[i]["pk"] == inInvData[j]["FK"]) {
                        LocalReturnObject[i].InvGrid[inInvData[j]["pk"]] = inInvData[j];
                    };
                };
            };

            return LocalReturnObject;
        }
    }
};

let FuncsForDisplay = {
    LoopItems: ({ inData }) => {
        let LocalReturnObject = {};

        Object.entries(inData).forEach(
            ([key, value]) => {
                FuncsForDisplay.LoopTableColumns({
                    inReturnObject: LocalReturnObject,
                    inKey: key,
                    inValue: value
                });
            });

        return LocalReturnObject;
    },
    LoopTableColumns: ({ inReturnObject, inKey, inValue }) => {
        let LocalColumnsArray = Object.keys(Object.values(inValue)[0]);

        inReturnObject[inKey] = {};
        inReturnObject[inKey].Display = FuncsForDisplay.ScreenFuncs.Display({ inKey, inValue });
        inReturnObject[inKey].Create = FuncsForDisplay.ScreenFuncs.Create({ inKey, inValue });

        if (LocalColumnsArray.includes("InvGrid") || LocalColumnsArray.includes("FinGrid")) {
            FuncsForDisplay.ForSubTable.ForScreens.Display.StartFunc({ inValue, inReturnObjectWithKey: inReturnObject[inKey].Display, inKey });
            FuncsForDisplay.ForSubTable.ForScreens.Create.StartFunc({ inValue, inReturnObjectWithKey: inReturnObject[inKey].Create, inKey });
        };
    },
    CommonFuncs: {
        TableColumnFuncs: {
            Create: ({ LocalColumnsArray, inKey }) => {
                let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

                let LocalTableColumnsWithNewAdded = FuncsForPredefined.TableColumnFuncs.InsertNew({
                    inColumnsArray: LocalTableColumnsObject,
                    inKey
                });

                let LocalTableColumnsObjectWithDefaultValues = FuncsForPredefined.TableColumns({ inTableColumns: LocalTableColumnsWithNewAdded, inKey });
                let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.MainTableColumns.ForScreens.Create({ inTableColumns: LocalTableColumnsObjectWithDefaultValues, inKey });

                return LocalTableColumnsWithTemplateData;
            },
            Display: ({ LocalColumnsArray, inKey }) => {
                let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

                let LocalTableColumnsWithNewAdded = FuncsForPredefined.TableColumnFuncs.InsertNew({
                    inColumnsArray: LocalTableColumnsObject,
                    inKey
                });

                let LocalTableColumnsObjectWithDefaultValues = FuncsForPredefined.TableColumns({ inTableColumns: LocalTableColumnsWithNewAdded, inKey });
                let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.MainTableColumns.ForScreens.Display({ inTableColumns: LocalTableColumnsObjectWithDefaultValues, inKey });

                return LocalTableColumnsWithTemplateData;
            }
        }
    },
    ForSubTable: {
        ForScreens: {
            Create: {
                StartFunc: ({ inValue, inReturnObjectWithKey, inKey }) => {
                    let LocalInvGridData = Object.values(inValue)[0];

                    FuncsForDisplay.ForSubTable.ForScreens.Create.InvGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
                    FuncsForDisplay.ForSubTable.ForScreens.Create.FinGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
                },
                InvGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
                    let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

                    if ("InvGrid" in inData) {
                        let LocalInvGridValues = Object.values(inData.InvGrid);
                        if (LocalInvGridValues.length > 0) {
                            LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

                            let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

                            let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.InvGrid.Create({
                                inTableColumns: LocalTableColumnsObject,
                                inKey
                            });

                            inReturnObjectWithKey.SubTableColumns.InvGrid.TableColumns = LocalTableColumnsWithTemplateData;
                            inReturnObjectWithKey.SubTableColumns.InvGrid.TableInfo = LocalTableInfoObject;
                        };
                    };
                },
                FinGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
                    let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

                    if ("FinGrid" in inData) {
                        let LocalInvGridValues = Object.values(inData.FinGrid);
                        if (LocalInvGridValues.length > 0) {
                            LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

                            let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

                            let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.FinGrid.Create({
                                inTableColumns: LocalTableColumnsObject,
                                inKey
                            });

                            inReturnObjectWithKey.SubTableColumns.FinGrid.TableColumns = LocalTableColumnsWithTemplateData;
                            inReturnObjectWithKey.SubTableColumns.FinGrid.TableInfo = LocalTableInfoObject;
                        };
                    };
                }
            },
            Display: {
                StartFunc: ({ inValue, inReturnObjectWithKey, inKey }) => {
                    let LocalInvGridData = Object.values(inValue)[0];

                    FuncsForDisplay.ForSubTable.ForScreens.Display.InvGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
                    FuncsForDisplay.ForSubTable.ForScreens.Display.FinGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
                },
                InvGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
                    let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

                    if ("InvGrid" in inData) {
                        let LocalInvGridValues = Object.values(inData.InvGrid);
                        if (LocalInvGridValues.length > 0) {
                            LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

                            let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

                            let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.InvGrid.Display({
                                inTableColumns: LocalTableColumnsObject,
                                inKey
                            });

                            inReturnObjectWithKey.SubTableColumns.InvGrid.TableColumns = LocalTableColumnsWithTemplateData;
                            inReturnObjectWithKey.SubTableColumns.InvGrid.TableInfo = LocalTableInfoObject;
                        };
                    };
                },
                FinGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
                    let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

                    if ("FinGrid" in inData) {
                        let LocalInvGridValues = Object.values(inData.FinGrid);
                        if (LocalInvGridValues.length > 0) {
                            LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

                            let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

                            let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.FinGrid.Display({
                                inTableColumns: LocalTableColumnsObject,
                                inKey
                            });

                            inReturnObjectWithKey.SubTableColumns.FinGrid.TableColumns = LocalTableColumnsWithTemplateData;
                            inReturnObjectWithKey.SubTableColumns.FinGrid.TableInfo = LocalTableInfoObject;
                        };
                    };
                }
            }
        },
        StartFunc: ({ inValue, inReturnObjectWithKey, inKey }) => {
            let LocalInvGridData = Object.values(inValue)[0];

            FuncsForDisplay.ForSubTable.InvGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
            FuncsForDisplay.ForSubTable.FinGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
        },
        InvGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
            let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

            if ("InvGrid" in inData) {
                let LocalInvGridValues = Object.values(inData.InvGrid);
                if (LocalInvGridValues.length > 0) {
                    LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

                    let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

                    let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.InvGrid.StartFunc({
                        inTableColumns: LocalTableColumnsObject,
                        inKey
                    });

                    inReturnObjectWithKey.SubTableColumns.InvGrid.TableColumns = LocalTableColumnsWithTemplateData;
                    inReturnObjectWithKey.SubTableColumns.InvGrid.TableInfo = LocalTableInfoObject;
                };
            };
        },
        FinGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
            let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

            if ("FinGrid" in inData) {
                let LocalInvGridValues = Object.values(inData.FinGrid);
                if (LocalInvGridValues.length > 0) {
                    LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

                    let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

                    let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.FinGrid.StartFunc({
                        inTableColumns: LocalTableColumnsObject,
                        inKey
                    });

                    inReturnObjectWithKey.SubTableColumns.FinGrid.TableColumns = LocalTableColumnsWithTemplateData;
                    inReturnObjectWithKey.SubTableColumns.FinGrid.TableInfo = LocalTableInfoObject;
                };
            };
        }
    },
    ScreenFuncs: {
        Display: ({ inKey, inValue }) => {
            let LocalColumnsArray = Object.keys(Object.values(inValue)[0]);
            let LocalReturnObject = {};
            let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));
            let LocalCommonTemplateScreen = JSON.parse(JSON.stringify(CommonTemplateScreen));
            let LocalTableColumnsWithTemplateData = FuncsForDisplay.CommonFuncs.TableColumnFuncs.Display({
                LocalColumnsArray,
                inKey
            });

            FChange({
                inObjToChange: LocalTableInfoObject,
                inObjWithValues: CommonTemplateTableInfo
            });

            LocalTableInfoObject.SearchRowArray.Label.DisplayObject.DisplayText = inKey;

            LocalReturnObject = LocalCommonTemplateScreen;
            LocalReturnObject.TableColumns = LocalTableColumnsWithTemplateData;
            LocalReturnObject.TableInfo = LocalTableInfoObject;

            return LocalReturnObject;
        },
        Create: ({ inKey, inValue }) => {
            let LocalColumnsArray = Object.keys(Object.values(inValue)[0]);
            let LocalReturnObject = {};
            let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));
            let LocalCommonTemplateScreen = JSON.parse(JSON.stringify(CommonTemplateScreen));

            let LocalTableColumnsWithTemplateData = FuncsForDisplay.CommonFuncs.TableColumnFuncs.Create({
                LocalColumnsArray,
                inKey
            });

            FChange({
                inObjToChange: LocalTableInfoObject,
                inObjWithValues: CommonTemplateTableInfo
            });

            LocalTableInfoObject.SearchRowArray.Label.DisplayObject.DisplayText = inKey;

            LocalReturnObject = LocalCommonTemplateScreen;
            LocalReturnObject.TableColumns = LocalTableColumnsWithTemplateData;
            LocalReturnObject.TableInfo = LocalTableInfoObject;

            return LocalReturnObject;
        }
    },
    StartFunc: ({ inData }) => {
        let DisplayPath;
        let LocalDisplayDir;
        let LocalDataToBeInserted;
        let LocalReturnDataPath;
        let LocalReturnData;

        Object.entries(inData).forEach(
            ([key, value]) => {
                LocalDisplayDir = `../../../../KData/JSON/${CommonDataPk}/Config/Transactions/${key}`;

                DisplayPath = `${LocalDisplayDir}/Display.json`;
                LocalReturnDataPath = `${LocalDisplayDir}/ReturnData.json`;

                LocalGroupByVoucherName = FromJsonFuncs.FuncGroupByVoucherName({ inData: value });

                if (!fs.existsSync(LocalDisplayDir)) {
                    fs.mkdirSync(LocalDisplayDir);
                };

                LocalReturnData = FuncsForReturnData.LoopItems({ inData: LocalGroupByVoucherName });

                fs.writeFileSync(Path.resolve(__dirname, LocalReturnDataPath), JSON.stringify(LocalReturnData));

                LocalDataToBeInserted = FuncsForDisplay.LoopItems({ inData: LocalGroupByVoucherName });

                fs.writeFileSync(Path.resolve(__dirname, DisplayPath), JSON.stringify(LocalDataToBeInserted));
            });
    }
};

let FuncsForReturnData = {
    LoopItems: ({ inData }) => {
        let LocalReturnObject = {};

        Object.entries(inData).forEach(
            ([key, value]) => {
                FuncsForReturnData.LoopTableColumns({
                    inReturnObject: LocalReturnObject,
                    inKey: key,
                    inValue: value
                });

            });

        return LocalReturnObject;
    },
    LoopTableColumns: ({ inReturnObject, inKey }) => {
        let LocalReturnDataObject = JSON.parse(JSON.stringify(CommonReturnData));

        inReturnObject[inKey] = {};
        inReturnObject[inKey].Display = LocalReturnDataObject;

        inReturnObject[inKey].Create = LocalReturnDataObject;
    },
};

module.exports = {
    BulkWithFileNameToDataOnly
};
