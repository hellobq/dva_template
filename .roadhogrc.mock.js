
export default {
  // Support type as Object and Array
  'GET /api/users': { users: [{
    "id": 1,
    "name": "bob"
  }, {
    "id": 2,
    "name": "Alice"
  }] },

  // Method like GET or POST can be omitted
  'POST /api/users': (req, res) => {
    console.log(req, res)
  },

  // Support for custom functions, the API is the same as express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },
};
