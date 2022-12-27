const path = require('path');
let DataPath = require("../../Kprivate/DataPath.json");
let GlobalDataPath = `../../../../${DataPath.Path}`;

const fs = require("fs");

let LocalLoginCheckFunc = ({ inUserName }) => {
    console.log("inUserName : ", inUserName);
    let LocalRetPK = 0;
    let LocalReturnObject = {};

    let LocalPath = fs.readFileSync(path.resolve(__dirname, `${GlobalDataPath}/Login/UserData.json`));

    let LocalUserData = JSON.parse(LocalPath);

    Object.entries(LocalUserData.data).forEach(
        ([key, value]) => {
            if (value.UserName === inUserName) {
                LocalRetPK = key;
            };
        }
    );

    if (LocalRetPK === undefined || LocalRetPK === 0) {
        LocalRetPK = LocalUserListCheckFunc({ inUserData: LocalUserData.data, inUserName });

        if (LocalRetPK !== undefined) {
            LocalReturnObject.kPK = LocalRetPK;
        };
    } else {
        LocalReturnObject.kPK = LocalRetPK;
    };

    return LocalReturnObject.kPK;
};

let LocalUserListCheckFunc = ({ inUserData, inUserName }) => {
    let LocalRetPK = 0;

    Object.entries(inUserData).forEach(
        ([Mainkey, Mainvalue]) => {
            if ("UserList" in Mainvalue) {
                Object.entries(Mainvalue.UserList).forEach(
                    ([UserListkey, UserListvalue]) => {
                        if (UserListvalue.UserName === inUserName) {
                            LocalRetPK = Mainkey;
                        };
                    }
                );
            };
        }
    );

    return LocalRetPK;
};

exports.UserNameToPKRet = ({ inUserName }) => {
    let LocalPath = fs.readFileSync(path.resolve(__dirname, `${GlobalDataPath}/Login/UserData.json`));
    let LocalRetPK;
    let LocalUserData = JSON.parse(LocalPath);

    LocalRetPK = LocalLoginCheckFunc({ inUserName });

    return LocalRetPK;
};
