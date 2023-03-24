let StartFunc = ({ inDataFromApi }) => {
    let jVarLocalQueryParams = jFgetUrlQueryParams();
    let jVarLocaldataFromApi = inDataFromApi;

    if (Object.keys(jVarLocalQueryParams).length > 0) {
        LocalForClassesFromUrl({
            indataFromApi: jVarLocaldataFromApi,
            inQueryParamsAsObject: jVarLocalQueryParams
        });
    } else {
        LocalForApplyClasses({ indataFromApi: jVarLocaldataFromApi });
    };
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

let LocalForApplyClasses_19Jan2022 = ({ indataFromApi }) => {
    let jVarLocalFirstFolder;
    let jVarLocalFirstFile;
    let jVarLocalFirstItem;
    let jVarLocalFirstScreen;
    console.log("aaaaaaaaaaaa : ", indataFromApi);
    if ("Folders" in indataFromApi) {
        if (Object.values(indataFromApi.Folders).length > 0) {
            jVarLocalFirstFolder = Object.values(indataFromApi.Folders)[0];
            jVarLocalFirstFolder.TabPageClass = " show active";
            jVarLocalFirstFolder.MenuClass = " active";

            if ("Files" in jVarLocalFirstFolder) {
                if (Object.values(jVarLocalFirstFolder.Files).length > 0) {
                    jVarLocalFirstFile = Object.values(jVarLocalFirstFolder.Files)[0];
                    jVarLocalFirstFile.TabPaneClass = " show active";
                    jVarLocalFirstFile.ButtonClass = " active";

                    if ("Items" in jVarLocalFirstFile) {
                        if (Object.values(jVarLocalFirstFile.Items).length > 0) {
                            jVarLocalFirstItem = Object.values(jVarLocalFirstFile.Items)[0];
                            jVarLocalFirstItem.ShowOnLoad = true;

                            if ("Screens" in jVarLocalFirstItem) {
                                if (Object.values(jVarLocalFirstItem.Screens).length > 0) {
                                    jVarLocalFirstScreen = Object.values(jVarLocalFirstItem.Screens)[0];
                                    jVarLocalFirstScreen.CollapseClass = " show";
                                };
                            };
                        };
                    };
                };

            };

        };
    };
};

let LocalForApplyClasses = ({ indataFromApi }) => {
    let jVarLocalFirstFolder;
    let jVarLocalFirstFile;
    let jVarLocalFirstItem;
    let jVarLocalFirstScreen;
    let jVarLocalsubtablecolumnkey;
    console.log("aaaaaaaaaaaa : ", indataFromApi);
    if ("Folders" in indataFromApi) {
        if (Object.values(indataFromApi.Folders).length > 0) {
            jVarLocalFirstFolder = Object.values(indataFromApi.Folders)[0];
            jVarLocalFirstFolder.TabPageClass = " show active";
            jVarLocalFirstFolder.MenuClass = " active";

            if ("Files" in jVarLocalFirstFolder) {
                if (Object.values(jVarLocalFirstFolder.Files).length > 0) {
                    jVarLocalFirstFile = Object.values(jVarLocalFirstFolder.Files)[0];
                    jVarLocalFirstFile.TabPaneClass = " show active";
                    jVarLocalFirstFile.ButtonClass = " active";

                    if ("Items" in jVarLocalFirstFile) {
                        if (Object.values(jVarLocalFirstFile.Items).length > 0) {
                            jVarLocalFirstItem = Object.values(jVarLocalFirstFile.Items)[0];
                            jVarLocalFirstItem.ShowOnLoad = true;

                            if ("Screens" in jVarLocalFirstItem) {
                                if (Object.values(jVarLocalFirstItem.Screens).length > 0) {
                                    jVarLocalFirstScreen = Object.values(jVarLocalFirstItem.Screens)[0];
                                    jVarLocalFirstScreen.CollapseClass = " show";
                                    // console.log("jjjjjjjj",jVarLocalFirstScreen);

                                    if ("SubTableColumnsObject" in jVarLocalFirstScreen) {
                                        if (Object.values(jVarLocalFirstScreen.SubTableColumnsObject).length > 0) {
                                            jVarLocalsubtablecolumnkey = Object.values(jVarLocalFirstScreen.SubTableColumnsObject)[0];
                                            jVarLocalsubtablecolumnkey.TabPageClass = " show active";
                                            jVarLocalsubtablecolumnkey.MenuClass = " active";
                                        };
                                    };
                                };
                            };

                        };
                    };
                };

            };

        };
    };
};

let LocalForClassesFromUrl = ({ indataFromApi, inQueryParamsAsObject }) => {
    let jVarLocalFolderName = inQueryParamsAsObject.inFolderName;
    let jVarLocalFileName = inQueryParamsAsObject.inFileName;
    let jVarLocalItemName = inQueryParamsAsObject.inItemName;
    let jVarLocalScreenName = inQueryParamsAsObject.inScreenName;
    let jVarLocalColumnName = inQueryParamsAsObject.inColumnName;
    let jVarLocalsubtablecolumnkey = inQueryParamsAsObject.subtablecolumnkey;
    // let jVarLocalColumnName = inQueryParamsAsObject.inColumnName;
    console.log("ssssssss : ", jVarLocalsubtablecolumnkey);
    if ("Folders" in indataFromApi) {
        if (jVarLocalFolderName in indataFromApi.Folders) {
            indataFromApi.Folders[jVarLocalFolderName].TabPageClass = " show active";
            indataFromApi.Folders[jVarLocalFolderName].MenuClass = " active";

            if ("Files" in indataFromApi.Folders[jVarLocalFolderName]) {
                if (jVarLocalFileName in indataFromApi.Folders[jVarLocalFolderName].Files) {
                    indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].TabPaneClass = " show active";
                    indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].ButtonClass = " active";

                    if ("Items" in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName]) {
                        if (jVarLocalItemName in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items) {
                            indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].ShowOnLoad = true;

                            if ("Screens" in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName]) {
                                if (jVarLocalScreenName in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens) {
                                    indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens[jVarLocalScreenName].CollapseClass = " show";

                                    if ("SubTableColumnsObject" in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens[jVarLocalScreenName]) {

                                        if (jVarLocalsubtablecolumnkey in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens[jVarLocalScreenName].SubTableColumnsObject) {

                                            indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens[jVarLocalScreenName].SubTableColumnsObject[jVarLocalsubtablecolumnkey].TabPageClass = " show active";
                                            indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens[jVarLocalScreenName].SubTableColumnsObject[jVarLocalsubtablecolumnkey].MenuClass = " active";

                                            if ("TableColumnsObject" in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens[jVarLocalScreenName].SubTableColumnsObject[jVarLocalsubtablecolumnkey]) {
                                                if (jVarLocalColumnName in indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens[jVarLocalScreenName].SubTableColumnsObject[jVarLocalsubtablecolumnkey].TableColumnsObject) {
                                                    indataFromApi.Folders[jVarLocalFolderName].Files[jVarLocalFileName].Items[jVarLocalItemName].Screens[jVarLocalScreenName].SubTableColumnsObject[jVarLocalsubtablecolumnkey].TableColumnsObject[jVarLocalColumnName].RowClass = "table-success";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };

        };
    };
};

export { StartFunc }