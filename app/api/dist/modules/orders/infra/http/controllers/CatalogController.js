"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListCatalogService = _interopRequireDefault(require("../../../services/ListCatalogService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CatalogController {
  async index(req, res) {
    const listCatalog = _tsyringe.container.resolve(_ListCatalogService.default);

    const catalog = await listCatalog.execute();
    return res.json(catalog);
  }

}

exports.default = CatalogController;