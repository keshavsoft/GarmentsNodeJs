import { FromNode } from "../PullData/FetchFuncs.js";
import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalData = await FromNode({
        inFolderName,
        inFileName,
        inItemName,
        inProjectName
    });

    if (jVarLocalData.KTF) {
        await ShowOnDom({ inData: jVarLocalData.JsonData });
    };
};

let ShowOnDom = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("TableBodyId");
    //let jVarLocalTemplate = document.getElementById("TemplateForRow");
    //let jVarLocalHtml = await TableRowStartFunc();

    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTemplate.KTF) {
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

        inData.forEach(element => {

            let jVarLocalToShowHtml = template(element);

            jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
        });

    };
};

export { StartFunc };