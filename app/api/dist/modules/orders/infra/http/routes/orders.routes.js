"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _OrdersController = _interopRequireDefault(require("../controllers/OrdersController"));

var _ShaverOrdersController = _interopRequireDefault(require("../controllers/ShaverOrdersController"));

var _ensureAuthenticated = _interopRequireDefault(require("../../../../users/infra/http/middlewares/ensureAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ordersRouter = (0, _express.Router)();
const ordersController = new _OrdersController.default();
const shaverOrdersController = new _ShaverOrdersController.default();
ordersRouter.use(_ensureAuthenticated.default);
ordersRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    shaver_id: _celebrate.Joi.string().uuid().required(),
    catalog_id: _celebrate.Joi.string().uuid().required()
  }
}), ordersController.create);
ordersRouter.put('/:order_id/accept', ordersController.accepted);
ordersRouter.put('/:order_id/reject', ordersController.rejected);
ordersRouter.put('/:order_id/finish', ordersController.finish);
ordersRouter.get('/', shaverOrdersController.index);
ordersRouter.get('/:shaver_id/available', shaverOrdersController.available);
var _default = ordersRouter;
exports.default = _default;