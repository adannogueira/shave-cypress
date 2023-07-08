"use strict";

var _tsyringe = require("tsyringe");

require("../../modules/users/providers");

require("./providers");

var _OrdersRepository = _interopRequireDefault(require("../../modules/orders/infra/typeorm/repositories/OrdersRepository"));

var _UsersRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UsersRepository"));

var _UserTokensRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UserTokensRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('OrdersRepository', _OrdersRepository.default);

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.default);

_tsyringe.container.registerSingleton('UserTokensRepository', _UserTokensRepository.default);