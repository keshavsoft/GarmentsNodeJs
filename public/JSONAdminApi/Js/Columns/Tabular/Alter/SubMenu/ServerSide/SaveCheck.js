import { jFUpdateFunc } from "./SaveCheck/Addlisteners.js";
import { jFCreateFoldersToDom } from "./SaveCheck/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
