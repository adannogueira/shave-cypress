"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _ProfileController = _interopRequireDefault(require("../controllers/ProfileController"));

var _ensureAuthenticated = _interopRequireDefault(require("../middlewares/ensureAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const profilesRouter = (0, _express.Router)();
const profileController = new _ProfileController.default();
profilesRouter.use(_ensureAuthenticated.default);
profilesRouter.get('/', profileController.show);
profilesRouter.put('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    name: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().email().required(),
    old_password: _celebrate.Joi.string(),
    password: _celebrate.Joi.string(),
    password_confirmation: _celebrate.Joi.string().valid(_celebrate.Joi.ref('password'))
  }
}), profileController.update);
var _default = profilesRouter;
exports.default = _default;