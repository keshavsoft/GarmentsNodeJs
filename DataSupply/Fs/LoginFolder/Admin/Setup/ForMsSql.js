const fs = require("fs-extra");
let CommonAbsolutePath = require("../../../DataPath");
let CommonFromCheck = require("../../../Config/TemplateData/CreateFolder/Check");
let CommonFromBasic = require("./Basic");
//let CommonFromCheck = require("../../../Config/TemplateData/CreateFolder/Check");
//let CommonFromCheck = require("../../../Config/TemplateData/CreateFolder/Check");
//let CommonFromTemplateDatas = require("../../../Config/TemplateDatas/ForSimpleAccounts/Setup");
let CommonFromTemplateDatas = require("../../../Config/JSONFolder/DataPkAsFolder/SetUp/FromTemplateDatas/ForSimpleAccounts/ConfigOnly");

class FillFromTemplateData {
    static StartFunc = async ({ inDestinationDir }) => {
        let LocalReturnData = { KTF: false, DirCreate: "" };
        let LocalFromCommonFromCheck = CommonFromCheck.ForExistence();

        if (LocalFromCommonFromCheck.KTF === false) {
            LocalReturnData.KReason = LocalFromCommonFromCheck.KReason;
            return LocalReturnData;
        };

        try {
            fs.copySync(LocalFromCommonFromCheck.CreateFolderDirPath, inDestinationDir);

            LocalReturnData.KTF = true;
        } catch (err) {
            console.error(err)
        };

        return await LocalReturnData;
    }
};

let StartFunc = async ({ inUserPK }) => {
    let LocalReturnData = { KTF: false, KReason: "" };
    let LocalFromTemplate;
    let LocalReturnFromCreateFolder;

    let GlobalDataPath = CommonAbsolutePath.ReturnAbsolutePathOfPresentApp({});
    let LocalFolderPath = `${GlobalDataPath}\\${inUserPK}`

    try {
        if (fs.existsSync(LocalFolderPath)) {
            LocalReturnData.KReason = "Data is already present on the server";
        } else {
            LocalReturnFromCreateFolder = await CommonFromBasic.StartFunc({ inUserPK });

            if (LocalReturnFromCreateFolder.KTF) {
                //   LocalFromTemplate = await FillFromTemplateData.StartFunc({ inDestinationDir: LocalFolderPath });
                LocalFromTemplate = CommonFromTemplateDatas.StartFunc({ inDataPK: inUserPK });
                console.log("LocalFromTemplate :  ", LocalFromTemplate);

                if (LocalFromTemplate.KTF) {
                    LocalReturnData.KTF = true;
                };
            };
        };
    } catch (error) {
        console.log("error : ", error);
    };

    return await LocalReturnData;
};

// let LocalMockFuncForStartFunc = async () => {
//     let LocalFromStartFunc = await StartFunc({ inUserPK: 18 });
//     console.log(" : ", LocalFromStartFunc);
// };

// LocalMockFuncForStartFunc().then();

module.exports = { StartFunc };