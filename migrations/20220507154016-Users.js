'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('Users',{
      id: { type: 'int', primaryKey:true, autoIncrement:true, unsigned: true},
      username: { type: 'string', length:20, notNull:false},
      fname: { type: 'string', length:30, notNull:false},
      lname: { type: 'string', length:30, notNull:false},
      email: { type: 'string', length:30, notNull:false},
      password: { type: 'string', length:20, notNull:false},
      
  })
};

exports.down = function(db) {
  return db.dropTable('Users');
};



exports._meta = {
  "version": 1
};
