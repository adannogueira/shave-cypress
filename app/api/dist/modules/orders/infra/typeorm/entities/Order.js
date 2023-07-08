"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OrderStatus = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../../../../users/infra/typeorm/entities/User"));

var _Catalog = _interopRequireDefault(require("./Catalog"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let OrderStatus;
exports.OrderStatus = OrderStatus;

(function (OrderStatus) {
  OrderStatus[OrderStatus["NEW"] = 0] = "NEW";
  OrderStatus[OrderStatus["ACCEPTED"] = 1] = "ACCEPTED";
  OrderStatus[OrderStatus["REJECETD"] = 2] = "REJECETD";
  OrderStatus[OrderStatus["FINISHED"] = 3] = "FINISHED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));

let Order = (_dec = (0, _typeorm.Entity)('orders'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)({
  type: 'enum',
  enum: OrderStatus,
  default: OrderStatus.NEW
}), _dec9 = Reflect.metadata("design:type", typeof OrderStatus === "undefined" ? Object : OrderStatus), _dec10 = (0, _typeorm.ManyToOne)(() => _User.default), _dec11 = (0, _typeorm.JoinColumn)({
  name: 'shaver_id'
}), _dec12 = Reflect.metadata("design:type", typeof _User.default === "undefined" ? Object : _User.default), _dec13 = (0, _typeorm.ManyToOne)(() => _Catalog.default), _dec14 = (0, _typeorm.JoinColumn)({
  name: 'catalog_id'
}), _dec15 = Reflect.metadata("design:type", typeof _Catalog.default === "undefined" ? Object : _Catalog.default), _dec16 = (0, _typeorm.Column)(), _dec17 = Reflect.metadata("design:type", String), _dec18 = (0, _typeorm.ManyToOne)(() => _User.default), _dec19 = (0, _typeorm.JoinColumn)({
  name: 'user_id'
}), _dec20 = Reflect.metadata("design:type", typeof _User.default === "undefined" ? Object : _User.default), _dec21 = (0, _typeorm.CreateDateColumn)(), _dec22 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec23 = (0, _typeorm.UpdateDateColumn)(), _dec24 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = (_temp = class Order {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "shaver_id", _descriptor2, this);

    _initializerDefineProperty(this, "catalog_id", _descriptor3, this);

    _initializerDefineProperty(this, "status", _descriptor4, this);

    _initializerDefineProperty(this, "shaver", _descriptor5, this);

    _initializerDefineProperty(this, "catalog", _descriptor6, this);

    _initializerDefineProperty(this, "user_id", _descriptor7, this);

    _initializerDefineProperty(this, "user", _descriptor8, this);

    _initializerDefineProperty(this, "created_at", _descriptor9, this);

    _initializerDefineProperty(this, "updated_at", _descriptor10, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shaver_id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "catalog_id", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "status", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "shaver", [_dec10, _dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "catalog", [_dec13, _dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "user_id", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec18, _dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec23, _dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = Order;
exports.default = _default;