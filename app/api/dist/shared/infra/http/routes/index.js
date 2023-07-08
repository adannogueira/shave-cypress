"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _orders = _interopRequireDefault(require("../../../../modules/orders/infra/http/routes/orders.routes"));

var _catalog = _interopRequireDefault(require("../../../../modules/orders/infra/http/routes/catalog.routes"));

var _users = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/users.routes"));

var _sessions = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/sessions.routes"));

var _passwords = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/passwords.routes"));

var _profiles = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/profiles.routes"));

var _shavers = _interopRequireDefault(require("../../../../modules/orders/infra/http/routes/shavers.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/orders', _orders.default);
routes.use('/catalog', _catalog.default);
routes.use('/shavers', _shavers.default);
routes.use('/users', _users.default);
routes.use('/sessions', _sessions.default);
routes.use('/password', _passwords.default);
routes.use('/profile', _profiles.default);
routes.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Shave eXperencie'
  });
});
var _default = routes;
exports.default = _default;