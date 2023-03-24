import { StartFunc as ShowOnDomStartFunc } from '../../ShowOnDom/ShowOnDom.js';
import { StartFunc as StartFuncUploadFunc } from './Addlisteners/UploadFunc.js';

let ButtonClickFunc = async () => {
    let jvarLocalJSONData = {};
    let jVarLocalSelectFileId = document.getElementById("SelectFileId");
    let jVarLocalSelectedFile = jVarLocalSelectFileId.files[0];
    fileValidation(jVarLocalSelectedFile);
    let jVarLocalFromFile = await jVarLocalreadFileAsync(jVarLocalSelectedFile);
    jvarLocalJSONData.JsonReports = JSON.parse(jVarLocalFromFile);
    jVarGlobalPresentiveData = jvarLocalJSONData.JsonReports;

    ShowOnDomStartFunc({ JsonData: jvarLocalJSONData });
    StartFuncUploadFunc();
};

let fileValidation = (file) => {
    console.log("file", file, file.type, file.type === "application/json");

    if ((file.type === "application/json") === false) {
        alert('Invalid file type');
        return false;
    }
};

let jVarLocalreadFileAsync = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsText(file);
    })
};

export { ButtonClickFunc };