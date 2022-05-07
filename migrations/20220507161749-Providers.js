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
  return db.createTable('Providers',{
      id: { type: 'int', primaryKey:true, autoIncrement:true, unsigned: true},
      company_name: { type: 'string', length:100, notNull:false},
      uen: { type: 'string', length:20, notNull:false}, 
      blk_hse: { type: 'string', length:5},
      street_name: { type: 'string', length:30},
      floor_no: { type: 'string', length:5},
      unit_no: { type: 'string', length:5},
      postal: { type: 'string', length:6,},
  })
};

exports.down = function(db) {
  return db.dropTable('Providers');
};

exports._meta = {
  "version": 1
};
