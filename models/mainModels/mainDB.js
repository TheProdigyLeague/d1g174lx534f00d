const db = require('../../config/connection');

module.exports = {
  getAllItems(){
    return db.many(`SELECT * FROM inventory`)
  }
}
