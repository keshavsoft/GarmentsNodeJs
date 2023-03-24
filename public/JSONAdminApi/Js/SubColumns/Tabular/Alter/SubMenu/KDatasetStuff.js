import { jFUpdateFunc } from "./KDatasetStuff/Addlisteners.js";
import { jFCreateFoldersToDom } from "./KDatasetStuff/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    
    jFUpdateFunc();
});
