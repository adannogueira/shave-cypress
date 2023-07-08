"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateCatalog1586807241836 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'catalog',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'description',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'price',
        type: 'float',
        isNullable: true
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('catalog');
  }

}

exports.default = CreateCatalog1586807241836;