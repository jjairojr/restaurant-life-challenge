import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Meats from '../app/models/Meats';

const models = [Meats];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
