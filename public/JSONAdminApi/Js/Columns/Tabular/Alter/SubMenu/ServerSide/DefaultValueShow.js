import { jFUpdateFunc } from "./DefaultValueShow/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DefaultValueShow/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
