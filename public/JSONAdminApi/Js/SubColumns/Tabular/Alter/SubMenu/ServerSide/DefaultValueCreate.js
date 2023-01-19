import { jFUpdateFunc } from "./DefaultValueCreate/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DefaultValueCreate/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
