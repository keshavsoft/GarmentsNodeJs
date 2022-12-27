
let CheckKeys = ({ inColumnObjectToUpdate, inKeysArray }) => {
    let LocalLoopObject = inColumnObjectToUpdate;

    inKeysArray.forEach(element => {
        if (LocalLoopObject.hasOwnProperty(element) === false) {
            LocalLoopObject[element] = {};
        };

        LocalLoopObject = LocalLoopObject[element];
    });

    return LocalLoopObject;
};

module.exports = { CheckKeys };