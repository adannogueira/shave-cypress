"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListOrdersService = _interopRequireDefault(require("../../../services/ListOrdersService"));

var _GetAvailableShaverService = _interopRequireDefault(require("../../../services/GetAvailableShaverService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShaverOrdersController {
  async index(req, res) {
    const listOrders = _tsyringe.container.resolve(_ListOrdersService.default);

    const orders = await listOrders.execute();
    return res.json(orders);
  }

  async available(req, res) {
    const {
      shaver_id
    } = req.params;

    const listOrders = _tsyringe.container.resolve(_GetAvailableShaverService.default);

    const orders = await listOrders.execute({
      shaver_id
    });
    return res.json(orders);
  }

}

exports.default = ShaverOrdersController;