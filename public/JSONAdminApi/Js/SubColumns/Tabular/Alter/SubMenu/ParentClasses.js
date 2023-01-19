import { jFUpdateFunc } from "./ParentClasses/Addlisteners.js";
import { jFCreateFoldersToDom } from "./ParentClasses/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
