import { StartFunc as TableHeadStartFunc } from "../FetchFuncs/HtmlPull/TableHead.js";
import { StartFunc as TableFootStartFunc } from "../FetchFuncs/HtmlPull/TableFoot.js";

let StartFunc = async () => {
    await ShowOnDomTableHeader();
    await ShowOnDomTableFooter();
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