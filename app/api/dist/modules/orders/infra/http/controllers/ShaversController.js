"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _ListShaversService = _interopRequireDefault(require("../../../services/ListShaversService"));

var _User = _interopRequireDefault(require("../../../../users/infra/typeorm/entities/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShaversController {
  async index(req, res) {
    const user_id = req.user.id;

    const listShavers = _tsyringe.container.resolve(_ListShaversService.default);

    const shavers = await listShavers.execute({
      user_id
    });
    return res.json((0, _classTransformer.classToClass)((0, _classTransformer.plainToClass)(_User.default, shavers)));
  }

}

exports.default = ShaversController;