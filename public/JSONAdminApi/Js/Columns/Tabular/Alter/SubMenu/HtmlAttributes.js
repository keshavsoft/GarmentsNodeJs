import { jFUpdateFunc } from "./HtmlAttributes/Addlisteners.js";
import { jFCreateFoldersToDom } from "./HtmlAttributes/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
