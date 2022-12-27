import { jFUpdateFunc } from "./DataAttributes/Addlisteners.js";
import { jFCreateFoldersToDom } from "./DataAttributes/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
   // console.log("FromjFCreateFoldersToDom : ", FromjFCreateFoldersToDom);
    
    jFUpdateFunc();
});
