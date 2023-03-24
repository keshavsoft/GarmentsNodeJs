import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";
import { jFCloneFunc as jFCloneFuncAddlisteners } from "./Addlisteners/Addlisteners.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    jFCloneFuncAddlisteners();
});
