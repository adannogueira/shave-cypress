"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateOrderService = _interopRequireDefault(require("../../../services/CreateOrderService"));

var _UpdateOrderStatusService = _interopRequireDefault(require("../../../services/UpdateOrderStatusService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrdersController {
  async create(req, res) {
    const user_id = req.user.id;
    const {
      shaver_id,
      catalog_id
    } = req.body;

    const createOrder = _tsyringe.container.resolve(_CreateOrderService.default);

    const order = await createOrder.execute({
      shaver_id,
      catalog_id,
      user_id
    });
    return res.json(order);
  }

  async accepted(req, res) {
    const {
      order_id
    } = req.params;

    const updateOrderStatusService = _tsyringe.container.resolve(_UpdateOrderStatusService.default);

    const order = await updateOrderStatusService.execute({
      order_id,
      status_id: 1
    });
    return res.json(order);
  }

  async rejected(req, res) {
    const {
      order_id
    } = req.params;

    const updateOrderStatusService = _tsyringe.container.resolve(_UpdateOrderStatusService.default);

    const order = await updateOrderStatusService.execute({
      order_id,
      status_id: 2
    });
    return res.json(order);
  }

  async finish(req, res) {
    const {
      order_id
    } = req.params;

    const updateOrderStatusService = _tsyringe.container.resolve(_UpdateOrderStatusService.default);

    const order = await updateOrderStatusService.execute({
      order_id,
      status_id: 3
    });
    return res.json(order);
  }

}

exports.default = OrdersController;