import { FromNode } from "../PullData/FetchFuncs.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalData = await FromNode({
        inFolderName,
        inFileName,
        inItemName,
        inProjectName
    });

    if (jVarLocalData.KTF) {
        ShowOnDom({ inData: jVarLocalData.JsonData });
    };
};

let ShowOnDom = ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("TableBodyId");
    let jVarLocalTemplate = document.getElementById("TemplateForRow");

    var template = Handlebars.compile(jVarLocalTemplate.innerHTML);

    inData.forEach(element => {

        let jVarLocalToShowHtml = template(element);

        jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
    });

};

export { StartFunc };