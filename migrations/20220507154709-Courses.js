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
  return db.createTable('Courses',{
      id: { type: 'int', primaryKey:true, autoIncrement:true, unsigned: true},
      course_title: { type: 'string', length:100, notNull:false},
      cost: { type: 'int', default:0, notNull:false},
      seats: { type: 'int', default:0, notNull:false},
      start_date: { type: 'datetime'},
      end_date: { type: 'datetime'},
      trial: 'boolean',
      description: { type: 'string', length:999, notNull:false},

  })
};

exports.down = function(db) {
  return db.dropTable('Courses');
};

exports._meta = {
  "version": 1
};
