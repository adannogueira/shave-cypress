"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IOrdersRepository = _interopRequireDefault(require("../repositories/IOrdersRepository"));

var _IUsersRepository = _interopRequireDefault(require("../../users/repositories/IUsersRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateOrderService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('OrdersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IOrdersRepository.default === "undefined" ? Object : _IOrdersRepository.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateOrderService {
  constructor(ordersRepository, usersRepository) {
    this.ordersRepository = ordersRepository;
    this.usersRepository = usersRepository;
  }

  async execute({
    shaver_id,
    catalog_id,
    user_id
  }) {
    if (user_id === shaver_id) {
      throw new _AppError.default("You can't create an order with yourself", 400);
    }

    const shaver = await this.usersRepository.findById(shaver_id);

    if (!shaver) {
      throw new _AppError.default('Shaver not found', 404);
    }

    const catalog = await this.ordersRepository.findCatalogById(catalog_id);

    if (!catalog) {
      throw new _AppError.default('Catalog item not found', 404);
    }

    try {
      const order = await this.ordersRepository.create({
        shaver_id,
        catalog_id,
        user_id
      });
      return order;
    } catch (error) {
      const {
        constraint
      } = error;

      if (constraint === 'OrderUser') {
        throw new _AppError.default('Logged user was lost', 400);
      } else {
        console.log(error);
        throw new _AppError.default('Vixe erro desconhecido', 500);
      }
    }
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = CreateOrderService;
exports.default = _default;