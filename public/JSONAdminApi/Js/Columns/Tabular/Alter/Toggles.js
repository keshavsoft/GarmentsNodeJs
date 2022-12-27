import { jFUpdateFunc } from "./Toggles/Addlisteners.js";
import { jFCreateFoldersToDom } from "./Toggles/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
