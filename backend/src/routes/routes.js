"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_controllers_js_1 = require("../controllers/User.controllers.js");
var router = (0, express_1.Router)();
router.post('/user/register', User_controllers_js_1.RegisterUserController);
exports.default = router;
