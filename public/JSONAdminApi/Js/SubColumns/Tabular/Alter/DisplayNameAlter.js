import { jFUpdateFunc } from "./DisplayNameAlter/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DisplayNameAlter/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
