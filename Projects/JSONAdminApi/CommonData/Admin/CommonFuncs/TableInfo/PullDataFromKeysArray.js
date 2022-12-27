
let CheckKeys = ({ inTableInfoObjectToUpdate, inKeysArray }) => {
    let LocalLoopObject = inTableInfoObjectToUpdate;

    inKeysArray.forEach(element => {
        if (LocalLoopObject.hasOwnProperty(element) === false) {
            LocalLoopObject[element] = {};
        };

        LocalLoopObject = LocalLoopObject[element];
    });

    return LocalLoopObject;
};

module.exports = { CheckKeys };