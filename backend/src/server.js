"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var os_1 = require("os");
var routes_js_1 = require("./routes/routes.js");
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = Number(process.env.PORT || 4000);
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:4173", "http://frontend_project:4173"], // pode ajustar se precisar
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(body_parser_1.default.json());
app.use('/api', routes_js_1.default);
var getLocalIPAddress = function () {
    var interfaces = os_1.default.networkInterfaces();
    for (var _i = 0, _a = Object.keys(interfaces); _i < _a.length; _i++) {
        var name_1 = _a[_i];
        var netInterface = interfaces[name_1];
        if (netInterface) {
            for (var _b = 0, netInterface_1 = netInterface; _b < netInterface_1.length; _b++) {
                var iface = netInterface_1[_b];
                if (iface.family === 'IPv4' && !iface.internal) {
                    return iface.address;
                }
            }
        }
    }
    return '127.0.0.1'; // Retorna localhost como fallback
};
// Rota para obter o IP local
app.get('/api/ip', function (req, res) {
    var ipAddress = getLocalIPAddress();
    res.json({ ip: ipAddress });
});
// Iniciar servidor
var server = app.listen(port, '0.0.0.0', function () {
    console.log("Servidor rodando em http://localhost:".concat(port));
});
// Tratamento de erro ao iniciar o servidor
server.on('error', function (err) {
    console.error('Erro ao iniciar o servidor:', err.message);
    if (err.code === 'EADDRINUSE') {
        console.error("Porta ".concat(port, " j\u00E1 est\u00E1 em uso"));
    }
    else if (err.code === 'EACCES') {
        console.error("Permiss\u00E3o negada para usar a porta ".concat(port));
    }
    process.exit(1);
});
