"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize_1 = require("../config/sequelize");
const { STRING, BOOLEAN, INTEGER, BIGINT, TEXT, UUID, UUIDV1 } = Sequelize;
const User = sequelize_1.default.define('user', {
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
    visible: { type: BOOLEAN, defaultValue: 0 },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
exports.default = User;
//# sourceMappingURL=User.js.map