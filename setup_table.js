/**
 * Created by hyochan on 12/12/15.
 * https://github.com/mscdex/node-mariasql
 * for window : npm install -g -production window-build-tools
 */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost',
  // socketPath : '/opt/local/var/run/mysql56/mysqld.sock',
  user : 'user_name',
  port : '3306',
  password : 'password',
  database : 'database',
  multipleStatements : true
});

const
  USER_TABLE = 'user',
;

connection.query('DROP TABLE IF EXISTS ' + USER_TABLE);

connection.query('CREATE TABLE ' + USER_TABLE + '(' +
  '_id CHAR(36) NOT NULL UNIQUE, ' + '\n' +
  'email VARCHAR(255) DEFAULT "", ' + '\n' +
  'password VARCHAR(255) DEFAULT "",' + '\n' +
  'display_name VARCHAR(255) DEFAULT "", ' + '\n' +// 한글 1자당 utf8일 떄는 3바이트씩
  'photo_path TEXT DEFAULT "", ' + '\n' +
  'visible TINYINT(1) DEFAULT 1,' + '\n' +
  'created_at TIMESTAMP, ' + '\n' +
  'updated_at TIMESTAMP, ' + '\n' +
  'PRIMARY KEY(_id),' + '\n' +
  'INDEX(email, password, cooni_id)' + '\n' +
  ')'
);

// prepare statement example
/*
var prep = c.prepare('SELECT * FROM users WHERE id = :id AND name = :name');

c.query(prep({ id: 1337, name: 'Frylock' }), function(err, rows) {
  if (err)
    throw err;
  console.dir(rows);
});

c.end();
*/

connection.end();
