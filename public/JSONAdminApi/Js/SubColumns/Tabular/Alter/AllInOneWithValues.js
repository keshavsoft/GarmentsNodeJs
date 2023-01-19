import { jFUpdateFunc } from "./AllInOneWithValues/Addlisteners.js";
import { jFCreateFoldersToDom } from "./AllInOneWithValues/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);

    jFUpdateFunc();
});
