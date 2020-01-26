import Sequelize, { Model } from 'sequelize';

class Meats extends Model {
  static init(sequelize) {
    super.init(
      {
        meat: Sequelize.STRING,
        drink: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Meats;
