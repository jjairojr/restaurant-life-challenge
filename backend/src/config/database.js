module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'lifeapps-challenge',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
