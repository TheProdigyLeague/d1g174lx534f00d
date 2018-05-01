const db = require(`../../config/connection`)

module.exports = {
  getSinge(username){
    return db.one(`SELECT * FROM user_table WHERE userename=$1`, username)
  }
}
