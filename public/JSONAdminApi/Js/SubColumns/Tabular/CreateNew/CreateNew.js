import { jFUpdateFunc } from "./CreateNew/Addlisteners.js";
import { jFCreateFoldersToDom } from "./CreateNew/ShowOnDom.js";
import { StartFunc as StartFuncShowColumns } from "./ButtonClickFunc/ShowColumns.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    jFUpdateFunc();
    StartFuncShowColumns();
});
