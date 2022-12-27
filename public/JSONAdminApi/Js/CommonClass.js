class PrepareClass {
    constructor({ inProjectName }) {
        this.Config = {
            RouteStart: {
                Start: "JSONAdminApi",
                SubRoute: "API",
                HtmlPath: "",
                UserCheckRoute: "JSONUser",
                AdminSubRoute: "AdminApi",
            },
            Modal: {
                Id: "LoginModalId"
            },
            Public: {
                ProjectName: ""
            },
            Customize: {
                ModalPopUp: {
                    Show: true,
                    Type: "SweetAlert"
                }
            },
            ClientSide: {
                UrlForIp_Old: "https://api.ipify.org/",
                UrlForIp: "http://httpbin.org/ip",
            }
        };

        if (inProjectName === undefined) {
            this.Config.Public.ProjectName = this.Config.RouteStart.Start
        } else {
            this.Config.RouteStart.Start = inProjectName;
            this.Config.Public.ProjectName = inProjectName;
        };
    };
};

class KSCommonFuncs {
    static SelectionMenu = {
        PrepareObject: () => {
            let jVarReturnObject = {
                FolderName: document.getElementById("FolderSelected").value,
                FileName: document.getElementById("FileSelected").value,
                ItemName: document.getElementById("ItemSelected").value,
                ScreenName: document.getElementById("ScreenSelected").value
            };

            return jVarReturnObject;
        },
        PrepareQueryString: ({ inMenuObject }) => {
            let jVarLocalQueryStringToReturn = "";

            Object.entries(inMenuObject).forEach(
                ([key, value]) => {
                    if (jVarLocalQueryStringToReturn.length === 0) {
                        jVarLocalQueryStringToReturn = `${key}=${value}`
                    } else {
                        jVarLocalQueryStringToReturn += `&${key}=${value}`
                    };
                }
            );

            return jVarLocalQueryStringToReturn;
        },
        NavigateToUrl: (inUrl) => {
            let jVarLocalNavObject = this.SelectionMenu.PrepareObject();
            let jVarLocalQueryString = this.SelectionMenu.PrepareQueryString({ inMenuObject: jVarLocalNavObject });

            window.location.href = `${inUrl}.html?${jVarLocalQueryString}`;
        },
        FillNavMenuWithValues: () => {
            let jVarCommonUrlSearch = decodeURI(document.location.search).split("?");
            if (jVarCommonUrlSearch.length > 2) {
                let jVarCommonUrlSearchArray = jVarCommonUrlSearch[1].split("&");
                let jVarLocalHtmlParentControl = document.getElementById("KDataListNavBar");
                let jVarLocalHtmlInputs = jVarLocalHtmlParentControl.querySelectorAll("input[list]");
                let jVarCommonSearchToObject = {};
                let jVarLoopSplit;

                jVarCommonUrlSearchArray.forEach(element => {
                    jVarLoopSplit = element.split("=");
                    jVarCommonSearchToObject[jVarLoopSplit[0]] = jVarLoopSplit[1];
                });

                jVarLocalHtmlInputs.forEach((LoopItem) => {
                    if (LoopItem.name in jVarCommonSearchToObject) {
                        LoopItem.value = jVarCommonSearchToObject[LoopItem.name];
                    };
                });
            };
        }
    }
};

let jVarGlobalClientObject = new PrepareClass({});