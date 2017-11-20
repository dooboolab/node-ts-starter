import * as  Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
const { STRING, BOOLEAN, INTEGER, BIGINT, TEXT, UUID, UUIDV1 } = Sequelize;

const User = sequelize.define('user', {
  _id: {
    type: UUID,
    defaultValue: UUIDV1,
    allowNull: true,
    primaryKey: true,
  },
  email: { type: STRING },
  password: { type: STRING, allowNull: true },
  display_name: { type: STRING, allowNull: true },
  photo_path: { type: STRING, allowNull: true },
  visible: { type: BOOLEAN, defaultValue: 0 }, // 탈퇴한 회원들은 _id를 지운다.
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export default User;
