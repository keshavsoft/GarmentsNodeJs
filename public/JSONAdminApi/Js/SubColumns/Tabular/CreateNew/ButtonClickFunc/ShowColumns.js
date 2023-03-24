let StartFunc = () => {

    let jvarlocalButtonId = document.getElementById("CreateColId");

    jvarlocalButtonId.addEventListener("click", ShowColumnFunc)


};

let ShowColumnFunc = () => {
    let jVarLocalHtmlInsertButtons = document.getElementsByClassName("InsertClass");

    for (let i = 0; i < jVarLocalHtmlInsertButtons.length; ++i) {
        if (jVarLocalHtmlInsertButtons[i].style.display === "none") {
            jVarLocalHtmlInsertButtons[i].style.display = "";
        } else {
            jVarLocalHtmlInsertButtons[i].style.display = "none";
        };
    };

};





export { StartFunc };