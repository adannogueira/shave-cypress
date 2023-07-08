"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateOrders1586807241835 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'orders',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'status',
        type: 'integer',
        default: 0
      }, {
        name: 'shaver_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'catalog_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'created_at',
        type: 'timestamptz',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamptz',
        default: 'now()'
      }]
    }));
    await queryRunner.createForeignKey('orders', new _typeorm.TableForeignKey({
      name: 'OrderShaver',
      columnNames: ['shaver_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('orders');
  }

}

exports.default = CreateOrders1586807241835;