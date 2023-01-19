import { jFUpdateFunc } from "./DisplayType/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DisplayType/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
