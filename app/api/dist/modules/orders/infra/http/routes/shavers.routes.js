"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ShaversController = _interopRequireDefault(require("../controllers/ShaversController"));

var _ensureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const shaversRouter = (0, _express.Router)();
const shaversController = new _ShaversController.default();
shaversRouter.use(_ensureAuthenticated.default);
shaversRouter.get('/', shaversController.index);
var _default = shaversRouter;
exports.default = _default;