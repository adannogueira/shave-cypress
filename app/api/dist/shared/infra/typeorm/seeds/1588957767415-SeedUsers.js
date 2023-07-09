"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeedUsers1588957767415 = void 0;

var _typeorm = require("typeorm");

var _bcryptjs = require("bcryptjs");

class SeedUsers1588957767415 {
  constructor() {
    this.name = '1588957767415-SeedUsers';
  }

  async up(_) {
    const pass = await (0, _bcryptjs.hash)('pwd123', 8);
    const passTest = await (0, _bcryptjs.hash)('t3st-pa$$', 8);
    const shavers = [{
      name: 'Jacob Black',
      email: 'jacob@shavexp.com',
      password: pass,
      is_shaver: true,
      avatar: 'jacob.png',
      level: 'Expert'
    }, {
      name: 'Hope Summers',
      email: 'hope@shavexp.com',
      password: pass,
      is_shaver: true,
      avatar: 'hope.png',
      level: 'Sênior'
    }, {
      name: 'Noah Smith',
      email: 'noah@shavexp.com',
      password: pass,
      is_shaver: true,
      avatar: 'noah.png',
      level: 'Expert'
    }, {
      name: 'Victor Lance',
      email: 'victor@shavexp.com',
      password: pass,
      is_shaver: true,
      avatar: 'victor.png',
      level: 'Pleno'
    }, {
      name: 'Nick Campbell',
      email: 'nick@shavexp.com',
      password: pass,
      is_shaver: true,
      avatar: 'nick.png',
      level: 'Trainee'
    }, {
      name: 'Jeremy Adams',
      email: 'jeremy@shavexp.com',
      password: pass,
      is_shaver: true,
      avatar: 'jeremy.png',
      level: 'Expert'
    }];
    await (0, _typeorm.getRepository)('users').save(shavers);
  }

  async down(_) {// do nothing
  }

}

exports.SeedUsers1588957767415 = SeedUsers1588957767415;