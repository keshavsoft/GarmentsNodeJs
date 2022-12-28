import { StartFunc as VeticalStartFunc } from "./FetchFuncs/HtmlPull/Vetical.js";

let StartFunc = async () => {
    await ShowOnDom();
};

let ShowOnDom = async () => {
    let jVarLocalVerticalId = document.getElementById("VerticalId");

    let jVarLocalVeticalHtml = await VeticalStartFunc();

    if (jVarLocalVeticalHtml.KTF) {
        jVarLocalVerticalId.innerHTML = jVarLocalVeticalHtml.HtmlString;
    };
};

export { StartFunc };