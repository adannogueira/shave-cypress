"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ensureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));

var _CatalogController = _interopRequireDefault(require("../controllers/CatalogController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const catalogRouter = (0, _express.Router)();
const catalog = new _CatalogController.default();
catalogRouter.use(_ensureAuthenticated.default);
catalogRouter.get('/', catalog.index);
var _default = catalogRouter;
exports.default = _default;