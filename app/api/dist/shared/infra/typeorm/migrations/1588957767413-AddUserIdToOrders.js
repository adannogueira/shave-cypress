"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class AddUserIdToOrders1588957767413 {
  async up(queryRunner) {
    await queryRunner.addColumn('orders', new _typeorm.TableColumn({
      name: 'user_id',
      type: 'uuid',
      isNullable: true
    }));
    await queryRunner.createForeignKey('orders', new _typeorm.TableForeignKey({
      name: 'OrderUser',
      columnNames: ['user_id'],
      referencedTableName: 'users',
      referencedColumnNames: ['id'],
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('orders', 'OrderUser');
    await queryRunner.dropColumn('orders', 'user_id');
  }

}

exports.default = AddUserIdToOrders1588957767413;