import { StartFunc as TableHeadStartFunc } from "../FetchFuncs/HtmlPull/TableHead.js";
import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";
import { StartFunc as TableFootStartFunc } from "../FetchFuncs/HtmlPull/TableFoot.js";

let StartFunc = async ({ inData }) => {
    await ShowOnDomTableHeader();
    await ShowOnDomTableBody({ inData });
    await ShowOnDomTableFooter();
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("InvTableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();
    
    if (jVarLocalTemplate.KTF) {
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

        Object.entries(inData.InvGrid).forEach(
            ([key, value]) => {
                let jVarLocalToShowHtml = template(value);

                jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
            }
        );
    };
};

let ShowOnDomTableHeader = async () => {
    let jVarLocalTableHeadId = document.getElementById("InvTableHeadId");

    let jVarLocalHeadHtml = await TableHeadStartFunc();
    
    if (jVarLocalHeadHtml.KTF) {
        jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
    };
};

let ShowOnDomTableFooter = async () => {
    let jVarLocalTableHeadId = document.getElementById("InvTableFooterId");

    let jVarLocalHeadHtml = await TableFootStartFunc();
    
    if (jVarLocalHeadHtml.KTF) {
        jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
    };
};

export { StartFunc };