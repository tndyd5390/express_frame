var pool = require("../config/mariaDB");

var _query = async(sql, params = []) => {
  var conn = await pool.getConnection(async conn => conn);
  var [rows] = await conn.query(sql, params);
  conn.release();
  return rows;
}

var _getUser = async(params) => {
  var sql = "SELECT * FROM USER";
  var result = await _query(sql, params);
  return result;
};

module.exports = () => {
  return {
    getUser: async (params) => {
      var result = await _getUser(params);
      return result;
    }
  }
}
