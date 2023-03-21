let StartFunc = () => {
    let jVarLocalQueryParams = jFgetUrlQueryParams();
    jFLocalShowOnDom();
    console.log("jVarLocalQueryParams : ", jVarLocalQueryParams);
};

let jFgetUrlQueryParams = () => {
    var queryParams = {}, param;
    var params = window.location.search.substring(1).split("&");
    // console.log("params : ", params);
    for (var i = 0; i < params.length; i++) {
        param = params[i].split('=');
        // console.log("param : ", param);
        if (param.length === 2) {
            queryParams[param[0]] = param[1];
        };
    }
    return queryParams;
};

let jFLocalShowOnDom = () => {

};

export { StartFunc }