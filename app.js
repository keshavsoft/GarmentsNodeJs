let CommonProjectNameForJSONApi = "JSONApi";
let CommonProjectNameForJSONUser = "JSONUser";
let CommonProjectNameForJSONReports = "JSONReports";
let CommonProjectNameForJSONImport = "JSONImport";

let CommonProjectNameForJSONAdminApi = "JSONAdminApi";
let CommonProjectNameForJSONUtility = "JSONUtility";

// let Commoncontrollers = require("./controllers/missedAll.controller");
// let CommonForWebSocketStart = require("./Projects/WebSocket/Start");

// require('dotenv').config();

const express = require('express');
const http = require('http');
const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '4117');

let SubRouteJSONApi = require(`./Projects/${CommonProjectNameForJSONApi}/Routes`);

// let SubRouteJSONUser = require(`./Projects/${CommonProjectNameForJSONUser}/Routes`);
// let SubRouteJSONReports = require(`./Projects/${CommonProjectNameForJSONReports}/Routes`);
// let SubRouteJSONImport = require(`./Projects/${CommonProjectNameForJSONImport}/Routes`);
let SubRouteJSONAdminApi = require(`./Projects/${CommonProjectNameForJSONAdminApi}/Routes`);
//let SubRouteJSONUtility = require(`./Projects/${CommonProjectNameForJSONUtility}/Routes`);

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '100mb' }));

// app.get('/', function (req, res, next) {
//     let LocalFilePath = path.join(__dirname + `/public/pages/dashboards/default.html`);
//     console.log("LocalFilePath : ", LocalFilePath);
//     res.end("KeshavSoft");
//     //  res.sendFile(path.join(__dirname + `/public/pages/dashboards/default.html`));
// });

app.use(`/${CommonProjectNameForJSONApi}`, SubRouteJSONApi);

// app.use(`/${CommonProjectNameForJSONUser}`, SubRouteJSONUser);
// app.use(`/${CommonProjectNameForJSONReports}`, SubRouteJSONReports);
// app.use(`/${CommonProjectNameForJSONImport}`, SubRouteJSONImport);
app.use(`/${CommonProjectNameForJSONAdminApi}`, SubRouteJSONAdminApi);
//app.use(`/${CommonProjectNameForJSONUtility}`, SubRouteJSONUtility);

// app.get('/*', Commoncontrollers.getUrl);
// app.post('/*', Commoncontrollers.postUrl);

//app.use("/JSONApi", cors({ origin: '*' }), SubRouteJSONProject);
// CommonForWebSocketStart(server);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, () => {
    console.log(`Listening in port : ${port}`);
    console.log(`Click to open : http://localhost:${port}`);
});