"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeedCatalog1588957767414 = exports.catalog = void 0;

var _typeorm = require("typeorm");

const catalog = [{
  description: 'Corte de cabelo',
  price: 79.99
}, {
  description: 'Barba',
  price: 49.99
}, {
  description: 'Combo Corte e Barba',
  price: 100.0
}, {
  description: 'Pigmentação barba',
  price: 69.99
}, {
  description: 'Tintura capilar',
  price: 99.99
}, {
  description: 'Pacote completo',
  price: 250.0
}];
exports.catalog = catalog;

class SeedCatalog1588957767414 {
  constructor() {
    this.name = 'SeedCatalog1588957767414';
  }

  async up(_) {
    await (0, _typeorm.getRepository)('catalog').save(catalog);
  }

  async down(_) {// do nothing
  }

}

exports.SeedCatalog1588957767414 = SeedCatalog1588957767414;