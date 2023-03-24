import { jFCreateFoldersToDom } from "./ToSubTableCreate/ShowOnDom.js";
import { StartFunc as StartFuncAddlisteners } from "./ToSubTableCreate/Addlisteners.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncAddlisteners();
});