import { StartFunc as TableHeadStartFunc } from "../FetchFuncs/HtmlPull/TableHead.js";
import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";

let StartFunc = async ({ inData }) => {
    await ShowOnDomTableHeader();
    await ShowOnDomTableBody({ inData });
};

let ShowOnDom = ({ inData }) => {
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalGSTId = document.getElementById("GSTId");

    if (jVarLocalBillNumberId !== null) {
        jVarLocalBillNumberId.innerHTML = inData.BillNumber;
    };

    if (jVarLocalGSTId !== null) {
        jVarLocalGSTId.value = inData.GST;
    };

    console.log("sssssss : ", inData);
    // var template = Handlebars.compile(jVarLocalTemplate.innerHTML);

    // inData.forEach(element => {

    //     let jVarLocalToShowHtml = template(element);

    //     jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
    // });

};


let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("InvTableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();
    console.log("inData : ", inData, jVarLocalTemplate);
    if (jVarLocalTemplate.KTF) {
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

        Object.entries(inData.InvGrid).forEach(
            ([key, value]) => {
                let jVarLocalToShowHtml = template(value);

                jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
            }
        );

        // inData.forEach(element => {

        //     let jVarLocalToShowHtml = template(element);

        //     jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
        // });

    };
};

let ShowOnDomTableHeader = async () => {
    let jVarLocalTableHeadId = document.getElementById("InvTableHeadId");

    let jVarLocalHeadHtml = await TableHeadStartFunc();
    console.log("jVarLocalTableHeadId : ", jVarLocalTableHeadId);
    if (jVarLocalHeadHtml.KTF) {
        jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
    };
};

export { StartFunc };