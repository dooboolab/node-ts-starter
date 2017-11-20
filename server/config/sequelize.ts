import * as  Sequelize from 'sequelize';
const { STRING, BOOLEAN, INTEGER, BIGINT, TEXT, UUID, UUIDV1 } = Sequelize;

// TODO: use config
const settings = {
  database: 'your_database',
  options: {
    define: {
      freezeTableName: true, // 이거하면 자동으로 테이블 뒤에 s 붙는거 막음.
    },
    operatorsAliases: {
      $gt: Sequelize.Op.gt, // use Sequelize.Op
      $gte: Sequelize.Op.gte,
      $lt: Sequelize.Op.lt,
      $lte: Sequelize.Op.lte,
      $ne: Sequelize.Op.ne,
      $eq: Sequelize.Op.eq,
      $and: Sequelize.Op.and,
      $or: Sequelize.Op.or,
      $not: Sequelize.Op.not,
      $between: Sequelize.Op.between,
      $notBetween: Sequelize.Op.notBetween,
      $in: Sequelize.Op.in,
      $notIn: Sequelize.Op.notIn,
      $like: Sequelize.Op.like,
      $notLike: Sequelize.Op.notLike,
    },
    dialect: 'mysql',
    dialectOptions: {
      useUTC: true,
    },
    timezone: '+09:00',
    host: 'localhost',
    pool: {
      min: 0,
      max: 1,
      idle: 10000,
    },
  },
  password: 'your_password',
  username: 'user_name',
};

const { database, username, password, options } = settings;
const sequelize = new Sequelize(database, username, password, options);

export default sequelize;
