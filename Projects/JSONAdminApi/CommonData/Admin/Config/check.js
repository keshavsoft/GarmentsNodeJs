let _ = require("lodash");

let PullData = ({ inItemConfig, inQueryObject, inDisplayData }) => {

    let inQueryObjectSplitArray = inQueryObject.split(".");
    let t1, t2, FilterObject, LoopSplitArray;
    //debug("inDisplayData : ", inDisplayData);
    let LocalDataNeeded = inDisplayData;

    inQueryObjectSplitArray.forEach(LoopItem => {
        if (LoopItem.startsWith("{{")) {
            LoopSplitArray = LoopItem.split("{{");
            LocalDataNeeded = LocalDataNeeded[inItemConfig[LoopSplitArray[1]]]

        } else {
            if (LoopItem.includes("[")) {
                t1 = LoopItem.split("[");

                if (t1[1].includes(":")) {
                    t2 = t1[1].split(":");
                    FilterObject = {};
                    FilterObject[t2[0]] = inItemConfig[t2[1]];

                    LocalDataNeeded = _.find(LocalDataNeeded[t1[0]], FilterObject);

                } else {
                    LocalDataNeeded = _.find(LocalDataNeeded[t1[0]], inItemConfig[t1[1]])[inItemConfig[t1[1]]];

                };
            } else {
                LocalDataNeeded = LocalDataNeeded[LoopItem];
            };
        };
    });

    return LocalDataNeeded;
};

module.exports = { PullData };