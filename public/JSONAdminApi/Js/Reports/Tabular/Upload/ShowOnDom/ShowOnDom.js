let StartFunc = ({ JsonData }) => {
    let localJsonData = JsonData;

    if (localJsonData !== null) {

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(localJsonData);
    };

};

export { StartFunc };