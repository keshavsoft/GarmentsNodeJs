import { jFUpdateFunc as jFUpdateFuncAddlisteners } from "./Addlisteners/Addlisteners.js";
import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    jFUpdateFuncAddlisteners();
});
