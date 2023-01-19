import { jFUpdateFunc } from "./TransformBeforeSave/Addlisteners.js";
import { jFCreateFoldersToDom } from "./TransformBeforeSave/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
