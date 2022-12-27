// // let CommonData = require("../../../../../CommonData/Utility/Json/File/Insert");
// // let GlobalUserNameToPK = require("../../../../../CommonData/Users/NameToPK");

// let CommonCreateInData = require("../../../../../../../DataSupply/Fs/Files/CreateInData");
// let CommonItemsInsert = require("../../../../../../../DataSupply/Fs/Data/Items/Insert");
// let CommonTally = require("../../../../../../../DataSupply/Tally/Bulk/Import/PeriodData");
// let CommonNew = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Insert/Start");
// let CommonFromTally = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Insert/ToDataFolder/FromTally");
// let CommonFromTallyWithTemplate = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/Insert/ToDataFolder/FromTallyWithTemplate");
// //let CommonFileWithData = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Insert/WithData");
// let CommonFileInsertBulk = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Insert/Bulk");

// //let CommonFileWithData = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Insert/");

// let CommonToDisplayFolder = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Insert/ToDisplayFolder");
// let CommonFromTallyBulk = require("../../../../../../../Tally/Bulk/Insert/Start");

// let CommonData = require("../../../../../../../DataSupply/Fs/Config/Folders/Files/Insert/ToDataFolder");

// let LocalGetDate = () => {
//     let date = new Date();

//     let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
//     let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
//     let yyyy = date.getFullYear();
//     let HH = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();

//     return `${dd}-${MM}-${yyyy}-${HH}-${mm}-${ss}`;
//     //return `${dd}-${MM}-${yyyy} ${HH}:${mm}:${ss}`;
//     //return `${dd}-${MM}-${yyyy}`;
// };

// // let Insert = ({ inJsonConfig, inToName, inUserName }) => {
// //     return new Promise((resolve, reject) => {
// //         let LocalUserPK = GlobalUserNameToPK.UserNameToPKRet({ inUserName });
// //         if (LocalUserPK > 0) {
// //             CommonData.CreateDataFolder({ inJsonConfig, inToName, inUserPK: LocalUserPK }).then(resolve).catch(reject);
// //         };

// //     });
// // };

// let FromParams = async ({ inFolderName, inFileNameWithExtension, inBody, inUserPK }) => {
//     let LocalReturnData = { KTF: false, KResult: [] };

//     try {
//         let LocalJsonConfig = {
//             inFolderName: inFolderName,
//             inJsonFileName: ""
//         };

//         let LocalReturnFromItemsInsert = await CommonCreateInData.FileWithExtensionAsync({
//             inFolderName: LocalJsonConfig.inFolderName,
//             inFileNameWithExtension,
//             inUserPK
//         });

//     } catch (error) {
//         LocalReturnData.KError = error;
//     };

//     return LocalReturnData;
// };

// let OnlyFile = async ({ inFolderName, inFileNameWithExtension, inUserPK }) => {
//     let LocalReturnData = { KTF: false, KResult: [] };

//     try {
//         let LocalReturnFromItemsInsert = await CommonNew.InsertNew({
//             inFolderName,
//             inFileName: inFileNameWithExtension,
//             inUserPK
//         });

//         if (LocalReturnFromItemsInsert.KTF) {
//             LocalReturnData.KTF = true;
//         };
//     } catch (error) {
//         LocalReturnData.KError = error;
//     };

//     return LocalReturnData;
// };

// let Bulk = async ({ inFolderName, inBody, inUserPK }) => {
//     let LocalReturnData = { KTF: false, KResult: [] };

//     try {
//         let LocalJsonConfig = {
//             inFolderName: inFolderName,
//             inJsonFileName: ""
//         };

//         if (Array.isArray(inBody)) {
//             let LocalFileNameWithExtension = `${inBody[0].DATE}.json`;
//             let LocalReturnFromItemsInsert;

//             let LocalReturnFromFileInsert = await CommonCreateInData.FileWithExtensionAsync({
//                 inFolderName: LocalJsonConfig.inFolderName,
//                 inFileNameWithExtension: LocalFileNameWithExtension,
//                 inUserPK
//             });

//             if (LocalReturnFromFileInsert.KTF) {
//                 LocalJsonConfig.inJsonFileName = LocalFileNameWithExtension;

//                 LocalReturnFromItemsInsert = await CommonItemsInsert.Bulk({
//                     inJsonConfig: LocalJsonConfig,
//                     inToName: LocalGetDate(),
//                     inItemData: inBody,
//                     inUserPK
//                 });

//                 if (LocalReturnFromItemsInsert.KTF) {
//                     LocalReturnData.KTF = true;
//                 };
//             } else {
//                 if (LocalReturnFromFileInsert.AlreadyPresent) {
//                     LocalJsonConfig.inJsonFileName = LocalFileNameWithExtension;

//                     LocalReturnFromItemsInsert = await CommonItemsInsert.Bulk({
//                         inJsonConfig: LocalJsonConfig,
//                         inToName: LocalGetDate(),
//                         inItemData: inBody,
//                         inUserPK
//                     });

//                     if (LocalReturnFromItemsInsert.KTF) {
//                         LocalReturnData.KTF = true;
//                     }
//                 }
//             };
//         };
//     } catch (error) {
//         console.log('error : ', error);
//         LocalReturnData.KError = error;
//     };

//     return LocalReturnData;
// };

// let BulkWithFileName = async ({ inFolderName, inFileNameWithExtension, inBody, inUserPK }) => {
//     let LocalReturnData = { KTF: false, KResult: [] };

//     try {
//         let LocalFromInsert = await CommonFileInsertBulk.Insert({
//             inFolderName, inFileNameWithExtension,
//             inData: inBody,
//             inUserPK
//         });
//         LocalReturnData.KReason = LocalFromInsert.KReason;
//     } catch (error) {
//         LocalReturnData.KError = error;
//     };

//     return LocalReturnData;
// };

// let TallySingleDate = async ({ inFolderName, inBody, inUserPK }) => {
//     let LocalReturnData = { KTF: false, KResult: [] };

//     try {
//         let LocalJsonConfig = {
//             inFolderName: inFolderName,
//             inJsonFileName: ""
//         };

//         if (Array.isArray(inBody)) {
//             let LocalFileNameWithExtension = `${inBody[0].DATE}.json`;
//             let LocalReturnFromItemsInsert;

//             let LocalReturnFromFileInsert = await CommonCreateInData.FileWithExtensionAsync({
//                 inFolderName: LocalJsonConfig.inFolderName,
//                 inFileNameWithExtension: LocalFileNameWithExtension,
//                 inUserPK
//             });

//             if (LocalReturnFromFileInsert.KTF) {
//                 LocalJsonConfig.inJsonFileName = LocalFileNameWithExtension;

//                 LocalReturnFromItemsInsert = await CommonFromTally.Bulk({
//                     inJsonConfig: LocalJsonConfig,
//                     inToName: LocalGetDate(),
//                     inItemData: inBody,
//                     inUserPK
//                 });

//                 if (LocalReturnFromItemsInsert.KTF) {
//                     LocalReturnData.KTF = true;
//                 };
//             } else {
//                 if (LocalReturnFromFileInsert.AlreadyPresent) {
//                     LocalJsonConfig.inJsonFileName = LocalFileNameWithExtension;

//                     LocalReturnFromItemsInsert = await CommonFromTally.Bulk({
//                         inJsonConfig: LocalJsonConfig,
//                         inToName: LocalGetDate(),
//                         inItemData: inBody,
//                         inUserPK
//                     });


//                     if (LocalReturnFromItemsInsert.KTF) {
//                         LocalReturnData.KTF = true;
//                     }
//                 }
//             };
//         };
//     } catch (error) {
//         LocalReturnData.KError = error;
//     };

//     return LocalReturnData;
// };

// let TallySingleDateWithConfigInsertAlso = async ({ inFolderName, inBody, inUserPK }) => {
//     let LocalReturnData = { KTF: false, KResult: [] };
//     //console.log("TallySingleDateWithConfigInsertAlso", inBody);
//     try {
//         let LocalJsonConfig = {
//             inFolderName: inFolderName,
//             inJsonFileName: ""
//         };

//         if (Array.isArray(inBody)) {
//             let LocalFileNameWithExtension = `${inBody[0].DATE}.json`;
//             let LocalReturnFromItemsInsert;

//             let LocalReturnFromFileInsert = await CommonCreateInData.FileWithExtensionAsync({
//                 inFolderName: LocalJsonConfig.inFolderName,
//                 inFileNameWithExtension: LocalFileNameWithExtension,
//                 inUserPK
//             });

//             let LocalReturnFromConfigInsert = await CommonToDisplayFolder.CreateConfigFolder({
//                 inFolderName,
//                 inFileNameWithExtension: LocalFileNameWithExtension,
//                 inUserPK
//             });
//             //console.log("LocalReturnFromFileInsert : ", LocalReturnFromFileInsert);
//             if (LocalReturnFromFileInsert.KTF || LocalReturnFromFileInsert.AlreadyPresent) {
//                 if (LocalReturnFromConfigInsert.KTF || LocalReturnFromConfigInsert.AlreadyPresent) {
//                     LocalJsonConfig.inJsonFileName = LocalFileNameWithExtension;

//                     LocalReturnFromItemsInsert = await CommonFromTally.ToConfigAlso({
//                         inJsonConfig: LocalJsonConfig,
//                         inToName: LocalGetDate(),
//                         inItemData: inBody,
//                         inUserPK
//                     });

//                     if (LocalReturnFromItemsInsert.KTF) {
//                         LocalReturnData.KTF = true;
//                     };
//                 };
//             }
//         };
//     } catch (error) {
//         LocalReturnData.KError = error;
//     };

//     return LocalReturnData;
// };

// let TallySingleDateWithConfigInsertAndFromTemplate = async ({ inFolderName, inBody, inUserPK }) => {
//     let LocalReturnData = { KTF: false, KResult: [] };

//     let LocaFromTally = await CommonFromTallyBulk.TallySingleDateWithConfigInsertAndFromTemplate({
//         inFolderName,
//         inBody, inUserPK
//     });
//     // console.log("LocaFromTally : ", LocaFromTally);

//     if (LocaFromTally.KTF) {
//         LocalReturnData.KTF = true;
//     };
//     //  console.log("LocalReturnData : ", LocalReturnData);
//     return LocalReturnData;
// };

// let TallySingleDateWithConfigInsertAndFromTemplate1 = async ({ inFolderName, inBody, inUserPK }) => {

//     let LocalReturnData = { KTF: false, KResult: [] };

//     try {
//         let LocalJsonConfig = {
//             inFolderName: inFolderName,
//             inJsonFileName: ""
//         };
//         if (Array.isArray(inBody)) {
//             let LocalFileNameWithExtension = `${inBody[0].DATE}.json`;
//             let LocalReturnFromItemsInsert;

//             let LocalReturnFromFileInsert = await CommonCreateInData.FileWithExtensionAsync({
//                 inFolderName: LocalJsonConfig.inFolderName,
//                 inFileNameWithExtension: LocalFileNameWithExtension,
//                 inUserPK
//             });

//             let LocalReturnFromConfigInsert = await CommonToDisplayFolder.CreateConfigFolder({
//                 inFolderName,
//                 inFileNameWithExtension: LocalFileNameWithExtension,
//                 inUserPK
//             });
//             if (LocalReturnFromFileInsert.KTF || LocalReturnFromFileInsert.AlreadyPresent) {
//                 if (LocalReturnFromConfigInsert.KTF || LocalReturnFromConfigInsert.AlreadyPresent) {
//                     LocalJsonConfig.inJsonFileName = LocalFileNameWithExtension;
//                     LocalReturnFromItemsInsert = await CommonFromTallyWithTemplate.BulkInsert({
//                         inJsonConfig: LocalJsonConfig,
//                         inToName: LocalGetDate(),
//                         inItemData: inBody,
//                         inUserPK
//                     });

//                     if (LocalReturnFromItemsInsert.KTF) {
//                         LocalReturnData.KTF = true;
//                     };
//                 };
//             }
//         };
//     } catch (error) {
//         LocalReturnData.KError = error;
//     };

//     return LocalReturnData;
// };

// let TallyPeriod = async ({ inFolderName, inBody, inUserPK }) => {
//     let LocalReturnData = { KTF: false, KResult: [] };
//     let LocalBodyTransformed;

//     try {
//         let LocalJsonConfig = {
//             inFolderName: inFolderName,
//             inJsonFileName: ""
//         };

//         if (Array.isArray(inBody)) {
//             //let LocalFileNameWithExtension = `${inBody[0].DATE}.json`;
//             LocalJsonConfig.inJsonFileName = LocalTallyFuncs.PrepareFileName({ inBody });

//             let LocalReturnFromItemsInsert;

//             let LocalReturnFromFileInsert = await CommonCreateInData.FileWithExtensionAsync({
//                 inFolderName: LocalJsonConfig.inFolderName,
//                 inFileNameWithExtension: LocalJsonConfig.inJsonFileName,
//                 inUserPK
//             });

//             LocalBodyTransformed = LocalTallyFuncs.PrepareBodyData.ArrayToObject({ inBody });

//             LocalReturnFromItemsInsert = await CommonItemsInsert.Bulk({
//                 inJsonConfig: LocalJsonConfig,
//                 inToName: LocalGetDate(),
//                 inItemData: LocalBodyTransformed,
//                 inUserPK
//             });

//             if (LocalReturnFromItemsInsert.KTF) {
//                 LocalReturnData.KTF = true;
//             };
//         };
//     } catch (error) {
//         console.log('error : ', error);
//         LocalReturnData.KError = error;
//     };

//     return LocalReturnData;
// };

// let TallyPeriodGroupByVoucherName = async ({ inFolderName, inBody, inUserPK }) => {
//     return CommonTally.GroupByVoucherName({ inFolderName, inBody, inUserPK });
// };

// let TallyWithInsertedDate = async ({ inFolderName, inBody, inUserPK }) => {
//     let LocalReturnData = { KTF: false, KResult: [] };
//     let LocalBodyTransformed;

//     try {
//         let LocalJsonConfig = {
//             inFolderName: inFolderName,
//             inJsonFileName: ""
//         };

//         if (Array.isArray(inBody)) {
//             LocalJsonConfig.inJsonFileName = LocalGetDate();

//             let LocalReturnFromItemsInsert;

//             let LocalReturnFromFileInsert = await CommonCreateInData.FileWithExtensionAsync({
//                 inFolderName: LocalJsonConfig.inFolderName,
//                 inFileNameWithExtension: LocalJsonConfig.inJsonFileName,
//                 inUserPK
//             });

//             LocalBodyTransformed = LocalTallyFuncs.PrepareBodyData.ArrayToObject({ inBody });

//             LocalReturnFromItemsInsert = await CommonItemsInsert.Bulk({
//                 inJsonConfig: LocalJsonConfig,
//                 inToName: LocalGetDate(),
//                 inItemData: LocalBodyTransformed,
//                 inUserPK
//             });

//             if (LocalReturnFromItemsInsert.KTF) {
//                 LocalReturnData.KTF = true;
//             };
//         };
//     } catch (error) {
//         console.log('error : ', error);
//         LocalReturnData.KError = error;
//     };

//     return LocalReturnData;
// };

// let LocalTallyFuncs = {
//     PrepareFileName: ({ inBody }) => {
//         let LocalFileNameWithExtension;
//         let LocalDatesArray = [];
//         let LocalMaxDate, LocalMinDate;

//         LocalDatesArray = inBody.map(element => {
//             return element.DATE
//         }).filter(element => {
//             if (element !== null) {
//                 return true;
//             };
//         });

//         LocalMaxDate = Math.max(...LocalDatesArray);
//         LocalMinDate = Math.min(...LocalDatesArray);

//         LocalFileNameWithExtension = `${LocalMinDate}-${LocalMaxDate}.json`;
//         console.log("LocalFileNameWithExtension : ", LocalFileNameWithExtension);
//         return LocalFileNameWithExtension;
//     },
//     PrepareBodyData: {
//         GroupByVoucherName: ({ inBody }) => {
//             let LocalReturnObject = {};

//             inBody.forEach(element => {
//                 LocalReturnObject[element.GUID] = element;
//             });

//             return LocalReturnObject;
//         },
//         ArrayToObject: ({ inBody }) => {
//             let LocalReturnObject = {};

//             inBody.forEach(element => {
//                 LocalReturnObject[element.GUID] = element;
//             });

//             return LocalReturnObject;
//         }
//     }
// };

// let FromJsonFuncs = {
//     FuncClubJsons: () => {
//         let LocalMainObject = FuncArrayToObject({ inData: mainData });
//         let LocalObjectWithInv = FromJsonFuncs.CommonFuncs.FuncPushInv({ inData: LocalMainObject, inInvData: invData });
//         let LocalObjectWithFin = FromJsonFuncs.CommonFuncs.FuncPushFin({ inData: LocalObjectWithInv, inFinData: finData });

//         let LocalChangedSignsObject = FromJsonFuncs.CommonFuncs.FuncChangeSigns({ inData: LocalObjectWithFin });
//         let LocalCategroisedObject = FromJsonFuncs.CommonFuncs.FuncCategoriseData({ inData: LocalChangedSignsObject });

//         return LocalCategroisedObject;
//     },
//     FuncGroupByVoucherName: ({ inData }) => {
//         let LocalReturnObject = {};
//         let LocalGroupByName = "VOUCHERTYPENAME";
//         let LocalPkName = "GUID";

//         for (var i in inData) {
//             if (inData[i][LocalGroupByName] in LocalReturnObject) {
//                 var key = inData[i][LocalPkName];
//                 LocalReturnObject[inData[i][LocalGroupByName]][key] = inData[i];
//             }
//             else {
//                 LocalReturnObject[inData[i][LocalGroupByName]] = {};
//                 var key = inData[i][LocalPkName];
//                 LocalReturnObject[inData[i][LocalGroupByName]][key] = inData[i];
//             };
//         };
//         return LocalReturnObject;
//     },
//     CommonFuncs: {
//         FuncCategoriseData: ({ inData }) => {
//             let LocalReturnObject = {};
//             for (var i in inData) {
//                 if (inData[i].ParentVoucherName in LocalReturnObject) {
//                     var key = inData[i]["pk"];
//                     LocalReturnObject[inData[i].ParentVoucherName][key] = inData[i];
//                 }
//                 else {
//                     LocalReturnObject[inData[i].ParentVoucherName] = {};
//                     var key = inData[i]["pk"];
//                     LocalReturnObject[inData[i].ParentVoucherName][key] = inData[i];
//                 };

//             };
//             return LocalReturnObject;
//         },
//         FuncChangeSigns: ({ inData }) => {
//             let LocalReturnObject = JSON.parse(JSON.stringify(inData));
//             for (var i in LocalReturnObject) {
//                 for (var j in LocalReturnObject[i].InvGrid) {
//                     if (LocalReturnObject[i].VoucherSign == "-") {
//                         LocalReturnObject[i].InvGrid[j].noof = -LocalReturnObject[i].InvGrid[j].noof;
//                     }
//                     else if (LocalReturnObject[i].VoucherSign == "+") {
//                         LocalReturnObject[i].InvGrid[j].noof = +LocalReturnObject[i].InvGrid[j].noof;

//                     };
//                 };
//             };
//             return LocalReturnObject;
//         },
//         FuncPushFin: ({ inData, inFinData }) => {
//             let LocalReturnObject = JSON.parse(JSON.stringify(inData));

//             for (var i in LocalReturnObject) {
//                 for (var j in inFinData) {
//                     if (LocalReturnObject[i]["pk"] == inFinData[j]["FK"]) {
//                         LocalReturnObject[i].FinGrid[inFinData[j]["pk"]] = inFinData[j];
//                     };
//                 };
//             };
//             return LocalReturnObject;
//         },
//         FuncPushInv: ({ inData, inInvData }) => {
//             let LocalReturnObject = JSON.parse(JSON.stringify(inData));

//             for (var i in LocalReturnObject) {
//                 for (var j in inInvData) {
//                     if (LocalReturnObject[i]["pk"] == inInvData[j]["FK"]) {
//                         LocalReturnObject[i].InvGrid[inInvData[j]["pk"]] = inInvData[j];
//                     };
//                 };
//             };

//             return LocalReturnObject;
//         }
//     }
// };

// let FuncsForDisplay = {
//     LoopItems: ({ inData }) => {
//         let LocalReturnObject = {};

//         Object.entries(inData).forEach(
//             ([key, value]) => {
//                 FuncsForDisplay.LoopTableColumns({
//                     inReturnObject: LocalReturnObject,
//                     inKey: key,
//                     inValue: value
//                 });
//             });

//         return LocalReturnObject;
//     },
//     LoopTableColumns: ({ inReturnObject, inKey, inValue }) => {
//         let LocalColumnsArray = Object.keys(Object.values(inValue)[0]);

//         inReturnObject[inKey] = {};
//         inReturnObject[inKey].Display = FuncsForDisplay.ScreenFuncs.Display({ inKey, inValue });
//         inReturnObject[inKey].Create = FuncsForDisplay.ScreenFuncs.Create({ inKey, inValue });

//         if (LocalColumnsArray.includes("InvGrid") || LocalColumnsArray.includes("FinGrid")) {
//             FuncsForDisplay.ForSubTable.ForScreens.Display.StartFunc({ inValue, inReturnObjectWithKey: inReturnObject[inKey].Display, inKey });
//             FuncsForDisplay.ForSubTable.ForScreens.Create.StartFunc({ inValue, inReturnObjectWithKey: inReturnObject[inKey].Create, inKey });
//         };
//     },
//     CommonFuncs: {
//         TableColumnFuncs: {
//             Create: ({ LocalColumnsArray, inKey }) => {
//                 let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

//                 let LocalTableColumnsWithNewAdded = FuncsForPredefined.TableColumnFuncs.InsertNew({
//                     inColumnsArray: LocalTableColumnsObject,
//                     inKey
//                 });

//                 let LocalTableColumnsObjectWithDefaultValues = FuncsForPredefined.TableColumns({ inTableColumns: LocalTableColumnsWithNewAdded, inKey });
//                 let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.MainTableColumns.ForScreens.Create({ inTableColumns: LocalTableColumnsObjectWithDefaultValues, inKey });

//                 return LocalTableColumnsWithTemplateData;
//             },
//             Display: ({ LocalColumnsArray, inKey }) => {
//                 let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

//                 let LocalTableColumnsWithNewAdded = FuncsForPredefined.TableColumnFuncs.InsertNew({
//                     inColumnsArray: LocalTableColumnsObject,
//                     inKey
//                 });

//                 let LocalTableColumnsObjectWithDefaultValues = FuncsForPredefined.TableColumns({ inTableColumns: LocalTableColumnsWithNewAdded, inKey });
//                 let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.MainTableColumns.ForScreens.Display({ inTableColumns: LocalTableColumnsObjectWithDefaultValues, inKey });

//                 return LocalTableColumnsWithTemplateData;
//             }
//         }
//     },
//     ForSubTable: {
//         ForScreens: {
//             Create: {
//                 StartFunc: ({ inValue, inReturnObjectWithKey, inKey }) => {
//                     let LocalInvGridData = Object.values(inValue)[0];

//                     FuncsForDisplay.ForSubTable.ForScreens.Create.InvGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
//                     FuncsForDisplay.ForSubTable.ForScreens.Create.FinGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
//                 },
//                 InvGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
//                     let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

//                     if ("InvGrid" in inData) {
//                         let LocalInvGridValues = Object.values(inData.InvGrid);
//                         if (LocalInvGridValues.length > 0) {
//                             LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

//                             let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

//                             let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.InvGrid.Create({
//                                 inTableColumns: LocalTableColumnsObject,
//                                 inKey
//                             });

//                             inReturnObjectWithKey.SubTableColumns.InvGrid.TableColumns = LocalTableColumnsWithTemplateData;
//                             inReturnObjectWithKey.SubTableColumns.InvGrid.TableInfo = LocalTableInfoObject;
//                         };
//                     };
//                 },
//                 FinGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
//                     let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

//                     if ("FinGrid" in inData) {
//                         let LocalInvGridValues = Object.values(inData.FinGrid);
//                         if (LocalInvGridValues.length > 0) {
//                             LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

//                             let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

//                             let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.FinGrid.Create({
//                                 inTableColumns: LocalTableColumnsObject,
//                                 inKey
//                             });

//                             inReturnObjectWithKey.SubTableColumns.FinGrid.TableColumns = LocalTableColumnsWithTemplateData;
//                             inReturnObjectWithKey.SubTableColumns.FinGrid.TableInfo = LocalTableInfoObject;
//                         };
//                     };
//                 }
//             },
//             Display: {
//                 StartFunc: ({ inValue, inReturnObjectWithKey, inKey }) => {
//                     let LocalInvGridData = Object.values(inValue)[0];

//                     FuncsForDisplay.ForSubTable.ForScreens.Display.InvGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
//                     FuncsForDisplay.ForSubTable.ForScreens.Display.FinGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
//                 },
//                 InvGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
//                     let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

//                     if ("InvGrid" in inData) {
//                         let LocalInvGridValues = Object.values(inData.InvGrid);
//                         if (LocalInvGridValues.length > 0) {
//                             LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

//                             let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

//                             let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.InvGrid.Display({
//                                 inTableColumns: LocalTableColumnsObject,
//                                 inKey
//                             });

//                             inReturnObjectWithKey.SubTableColumns.InvGrid.TableColumns = LocalTableColumnsWithTemplateData;
//                             inReturnObjectWithKey.SubTableColumns.InvGrid.TableInfo = LocalTableInfoObject;
//                         };
//                     };
//                 },
//                 FinGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
//                     let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

//                     if ("FinGrid" in inData) {
//                         let LocalInvGridValues = Object.values(inData.FinGrid);
//                         if (LocalInvGridValues.length > 0) {
//                             LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

//                             let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

//                             let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.FinGrid.Display({
//                                 inTableColumns: LocalTableColumnsObject,
//                                 inKey
//                             });

//                             inReturnObjectWithKey.SubTableColumns.FinGrid.TableColumns = LocalTableColumnsWithTemplateData;
//                             inReturnObjectWithKey.SubTableColumns.FinGrid.TableInfo = LocalTableInfoObject;
//                         };
//                     };
//                 }
//             }
//         },
//         StartFunc: ({ inValue, inReturnObjectWithKey, inKey }) => {
//             let LocalInvGridData = Object.values(inValue)[0];

//             FuncsForDisplay.ForSubTable.InvGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
//             FuncsForDisplay.ForSubTable.FinGrid({ inData: LocalInvGridData, inReturnObjectWithKey, inKey });
//         },
//         InvGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
//             let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

//             if ("InvGrid" in inData) {
//                 let LocalInvGridValues = Object.values(inData.InvGrid);
//                 if (LocalInvGridValues.length > 0) {
//                     LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

//                     let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

//                     let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.InvGrid.StartFunc({
//                         inTableColumns: LocalTableColumnsObject,
//                         inKey
//                     });

//                     inReturnObjectWithKey.SubTableColumns.InvGrid.TableColumns = LocalTableColumnsWithTemplateData;
//                     inReturnObjectWithKey.SubTableColumns.InvGrid.TableInfo = LocalTableInfoObject;
//                 };
//             };
//         },
//         FinGrid: ({ inData, inReturnObjectWithKey, inKey }) => {
//             let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));

//             if ("FinGrid" in inData) {
//                 let LocalInvGridValues = Object.values(inData.FinGrid);
//                 if (LocalInvGridValues.length > 0) {
//                     LocalColumnsArray = Object.keys(LocalInvGridValues[0]);

//                     let LocalTableColumnsObject = FuncScreenForObject({ inColumnsArray: LocalColumnsArray });

//                     let LocalTableColumnsWithTemplateData = FuncsForPredefined.TableColumnsCommonFuns.SubTableColumns.FinGrid.StartFunc({
//                         inTableColumns: LocalTableColumnsObject,
//                         inKey
//                     });

//                     inReturnObjectWithKey.SubTableColumns.FinGrid.TableColumns = LocalTableColumnsWithTemplateData;
//                     inReturnObjectWithKey.SubTableColumns.FinGrid.TableInfo = LocalTableInfoObject;
//                 };
//             };
//         }
//     },
//     ScreenFuncs: {
//         Display: ({ inKey, inValue }) => {
//             let LocalColumnsArray = Object.keys(Object.values(inValue)[0]);
//             let LocalReturnObject = {};
//             let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));
//             let LocalCommonTemplateScreen = JSON.parse(JSON.stringify(CommonTemplateScreen));
//             let LocalTableColumnsWithTemplateData = FuncsForDisplay.CommonFuncs.TableColumnFuncs.Display({
//                 LocalColumnsArray,
//                 inKey
//             });

//             FChange({
//                 inObjToChange: LocalTableInfoObject,
//                 inObjWithValues: CommonTemplateTableInfo
//             });

//             LocalTableInfoObject.SearchRowArray.Label.DisplayObject.DisplayText = inKey;

//             LocalReturnObject = LocalCommonTemplateScreen;
//             LocalReturnObject.TableColumns = LocalTableColumnsWithTemplateData;
//             LocalReturnObject.TableInfo = LocalTableInfoObject;

//             return LocalReturnObject;
//         },
//         Create: ({ inKey, inValue }) => {
//             let LocalColumnsArray = Object.keys(Object.values(inValue)[0]);
//             let LocalReturnObject = {};
//             let LocalTableInfoObject = JSON.parse(JSON.stringify(TableInfoObject));
//             let LocalCommonTemplateScreen = JSON.parse(JSON.stringify(CommonTemplateScreen));

//             let LocalTableColumnsWithTemplateData = FuncsForDisplay.CommonFuncs.TableColumnFuncs.Create({
//                 LocalColumnsArray,
//                 inKey
//             });

//             FChange({
//                 inObjToChange: LocalTableInfoObject,
//                 inObjWithValues: CommonTemplateTableInfo
//             });

//             LocalTableInfoObject.SearchRowArray.Label.DisplayObject.DisplayText = inKey;

//             LocalReturnObject = LocalCommonTemplateScreen;
//             LocalReturnObject.TableColumns = LocalTableColumnsWithTemplateData;
//             LocalReturnObject.TableInfo = LocalTableInfoObject;

//             return LocalReturnObject;
//         }
//     },
//     StartFunc: ({ inData }) => {
//         let DisplayPath;
//         let LocalDisplayDir;
//         let LocalDataToBeInserted;
//         let LocalReturnDataPath;
//         let LocalReturnData;

//         Object.entries(inData).forEach(
//             ([key, value]) => {
//                 LocalDisplayDir = `../../../../KData/JSON/${CommonDataPk}/Config/Transactions/${key}`;

//                 DisplayPath = `${LocalDisplayDir}/Display.json`;
//                 LocalReturnDataPath = `${LocalDisplayDir}/ReturnData.json`;

//                 LocalGroupByVoucherName = FromJsonFuncs.FuncGroupByVoucherName({ inData: value });

//                 if (!fs.existsSync(LocalDisplayDir)) {
//                     fs.mkdirSync(LocalDisplayDir);
//                 };

//                 LocalReturnData = FuncsForReturnData.LoopItems({ inData: LocalGroupByVoucherName });

//                 fs.writeFileSync(Path.resolve(__dirname, LocalReturnDataPath), JSON.stringify(LocalReturnData));

//                 LocalDataToBeInserted = FuncsForDisplay.LoopItems({ inData: LocalGroupByVoucherName });

//                 fs.writeFileSync(Path.resolve(__dirname, DisplayPath), JSON.stringify(LocalDataToBeInserted));
//             });
//     }
// };

// let FuncsForReturnData = {
//     LoopItems: ({ inData }) => {
//         let LocalReturnObject = {};

//         Object.entries(inData).forEach(
//             ([key, value]) => {
//                 FuncsForReturnData.LoopTableColumns({
//                     inReturnObject: LocalReturnObject,
//                     inKey: key,
//                     inValue: value
//                 });

//             });

//         return LocalReturnObject;
//     },
//     LoopTableColumns: ({ inReturnObject, inKey }) => {
//         let LocalReturnDataObject = JSON.parse(JSON.stringify(CommonReturnData));

//         inReturnObject[inKey] = {};
//         inReturnObject[inKey].Display = LocalReturnDataObject;

//         inReturnObject[inKey].Create = LocalReturnDataObject;
//     },
// };

// module.exports = {
//     Insert,
//     Bulk, FromParams, TallyPeriod, TallyWithInsertedDate,
//     TallyPeriodGroupByVoucherName,
//     OnlyFile,
//     TallySingleDate,
//     TallySingleDateWithConfigInsertAlso,
//     TallySingleDateWithConfigInsertAndFromTemplate,
//     BulkWithFileName
// };
