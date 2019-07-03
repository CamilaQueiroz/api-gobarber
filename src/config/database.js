module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  defines: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
