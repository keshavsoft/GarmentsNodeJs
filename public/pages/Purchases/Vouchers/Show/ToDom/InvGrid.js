import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";

let StartFunc = async ({ inData }) => {
    await ShowOnDomTableBody({ inData });
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("InvTableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();
    console.log("inData : ", inData);
    if (jVarLocalTemplate.KTF) {
        jVarLocalTableBodyId.innerHTML = "";
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

        Object.entries(inData.InvGrid).forEach(
            ([key, value]) => {
                value.pk = key;
                value.FK = inData.pk;
                let jVarLocalToShowHtml = template(value);

                jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
            }
        );
    };
};

export { StartFunc };