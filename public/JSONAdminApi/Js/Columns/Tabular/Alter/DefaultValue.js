import { jFUpdateFunc } from "./DefaultValue/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DefaultValue/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);

    jFUpdateFunc();
});
