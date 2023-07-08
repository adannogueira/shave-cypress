"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Order = _interopRequireWildcard(require("../entities/Order"));

var _Catalog = _interopRequireDefault(require("../entities/Catalog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class OrdersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormCatalog = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Order.default);
    this.ormCatalog = (0, _typeorm.getRepository)(_Catalog.default);
  }

  async findCatalog() {
    const catalog = await this.ormCatalog.find({
      order: {
        description: 'ASC'
      }
    });
    return catalog;
  }

  async findCatalogById(id) {
    const catalog = await this.ormCatalog.findOne(id);
    return catalog;
  }

  async findByShaverId({
    shaver_id
  }) {
    const orders = await this.ormRepository.find({
      where: {
        shaver_id: shaver_id,
        status: _Order.OrderStatus.ACCEPTED
      },
      relations: ['user', 'catalog'],
      order: {
        created_at: 'ASC'
      }
    });
    return orders;
  }

  async findAll() {
    const orders = await this.ormRepository.find({
      relations: ['user', 'catalog'],
      order: {
        created_at: 'ASC'
      }
    });
    return orders;
  }

  async findById(id) {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  async create({
    shaver_id,
    catalog_id,
    user_id
  }) {
    const order = this.ormRepository.create({
      shaver_id,
      catalog_id,
      user_id
    });
    await this.ormRepository.save(order);
    return order;
  }

  async save(order) {
    return this.ormRepository.save(order);
  }

}

var _default = OrdersRepository;
exports.default = _default;